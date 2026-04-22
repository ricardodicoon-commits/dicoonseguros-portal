// Auth helpers safe for SSR (sessionStorage only exists in the browser).

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

export function clearAuth(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem("auth_token");
    window.sessionStorage.removeItem("user_email");
  } catch {
    /* noop */
  }
}

export function setAuth(token: string, email: string): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem("auth_token", token);
    window.sessionStorage.setItem("user_email", email);
  } catch {
    /* noop */
  }
}
