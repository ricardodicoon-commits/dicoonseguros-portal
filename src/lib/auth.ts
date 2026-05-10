// Auth helpers safe for SSR (storage só existe no browser).
// Mock de credenciais para demo — substituir por Lovable Cloud + Supabase Auth quando o usuário pedir backend real.

export type UserRole = "admin" | "corretor";

export type DemoUser = {
  email: string;
  password: string;
  name: string;
  role: UserRole;
};

export type SessionUser = {
  email: string;
  name: string;
  role: UserRole;
};

export const DEMO_USERS: DemoUser[] = [
  {
    email: "admin@solvent.com",
    password: "Admin@2025",
    name: "Administrador",
    role: "admin",
  },
  {
    email: "corretor@solvent.com",
    password: "Corretor@2025",
    name: "Júlia Marques",
    role: "corretor",
  },
];

const STORAGE_KEY = "solvent_session";

function getStorage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export async function requestAccess(email: string, name: string): Promise<boolean> {
  try {
    const response = await fetch('/api/request-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name }),
    });
    return response.ok;
  } catch (e) {
    console.error('Failed to request access:', e);
    return false;
  }
}

export function validateCredentials(email: string, password: string): DemoUser | null {
  const normalized = email.trim().toLowerCase();
  return (
    DEMO_USERS.find(
      (u) => u.email.toLowerCase() === normalized && u.password === password,
    ) ?? null
  );
}

export function getSession(): { token: string; user: SessionUser } | null {
  const storage = getStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { token: string; user: SessionUser };
    if (!parsed?.token || !parsed?.user?.email) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function getAuthToken(): string | null {
  return getSession()?.token ?? null;
}

export function getCurrentUser(): SessionUser | null {
  return getSession()?.user ?? null;
}

export function getUserEmail(): string | null {
  return getCurrentUser()?.email ?? null;
}

export function getUserName(): string | null {
  return getCurrentUser()?.name ?? null;
}

export function getUserRole(): UserRole | null {
  return getCurrentUser()?.role ?? null;
}

const SESSION_EVENT = "solvent:session-changed";

function emitSessionChange(): void {
  if (typeof window === "undefined") return;
  try {
    window.dispatchEvent(new Event(SESSION_EVENT));
  } catch {
    /* noop */
  }
}

export function onSessionChange(handler: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const storageHandler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY || e.key === null) handler();
  };
  window.addEventListener(SESSION_EVENT, handler);
  window.addEventListener("storage", storageHandler);
  return () => {
    window.removeEventListener(SESSION_EVENT, handler);
    window.removeEventListener("storage", storageHandler);
  };
}

export function setAuth(token: string, user: SessionUser): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify({ token, user }));
    emitSessionChange();
  } catch {
    /* noop */
  }
}

export function clearAuth(): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.removeItem(STORAGE_KEY);
    emitSessionChange();
  } catch {
    /* noop */
  }
}

