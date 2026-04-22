// Auth helpers safe for SSR (sessionStorage only exists in the browser).

// Credenciais de acesso ao portal (mock — sem backend ainda)
export type DemoUser = {
  email: string;
  password: string;
  name: string;
  role: "admin" | "corretor" | "gerente";
};

export const DEMO_USERS: DemoUser[] = [
  {
    email: "admin@dicoonseguros.com",
    password: "Admin@2025",
    name: "Administrador",
    role: "admin",
  },
  {
    email: "corretor@dicoonseguros.com",
    password: "Corretor@2025",
    name: "Júlia Marques",
    role: "corretor",
  },
  {
    email: "gerente@dicoonseguros.com",
    password: "Gerente@2025",
    name: "Ricardo Souza",
    role: "gerente",
  },
];

export function validateCredentials(email: string, password: string): DemoUser | null {
  const normalized = email.trim().toLowerCase();
  return (
    DEMO_USERS.find(
      (u) => u.email.toLowerCase() === normalized && u.password === password,
    ) ?? null
  );
}

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem("auth_token");
  } catch {
    return null;
  }
}

export function getUserEmail(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem("user_email");
  } catch {
    return null;
  }
}

export function getUserName(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem("user_name");
  } catch {
    return null;
  }
}

export function getUserRole(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem("user_role");
  } catch {
    return null;
  }
}

export function clearAuth(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem("auth_token");
    window.sessionStorage.removeItem("user_email");
    window.sessionStorage.removeItem("user_name");
    window.sessionStorage.removeItem("user_role");
  } catch {
    /* noop */
  }
}

export function setAuth(token: string, user: { email: string; name: string; role: string }): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem("auth_token", token);
    window.sessionStorage.setItem("user_email", user.email);
    window.sessionStorage.setItem("user_name", user.name);
    window.sessionStorage.setItem("user_role", user.role);
  } catch {
    /* noop */
  }
}
