import { createFileRoute, useNavigate, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, Shield, CheckCircle2, ShieldCheck, Briefcase } from "lucide-react";
import { setAuth, validateCredentials, DEMO_USERS, getAuthToken, requestAccess } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  beforeLoad: () => {
    if (getAuthToken()) {
      throw redirect({ to: "/" });
    }
  },
  component: LoginPage,
});

function ReCaptcha({ onVerify }: { onVerify: () => void }) {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVerify = () => {
    if (verified || loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVerified(true);
      onVerify();
    }, 800);
  };

  return (
    <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-background w-full max-w-[300px] mb-4 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleVerify}
          className={`w-7 h-7 rounded border flex items-center justify-center transition-colors ${verified ? 'bg-green-500 border-green-500' : 'border-border bg-background hover:bg-muted'}`}
        >
          {loading && <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />}
          {verified && <CheckCircle2 className="w-5 h-5 text-white" />}
        </button>
        <span className="text-sm font-medium text-foreground">Não sou um robô</span>
      </div>
      <div className="flex flex-col items-center justify-center text-primary">
        <ShieldCheck className="w-6 h-6" />
        <span className="text-[10px] mt-0.5 font-medium">reCAPTCHA</span>
      </div>
    </div>
  );
}

function LoginPage() {
  const navigate = useNavigate();
  const [view, setView] = useState<"login" | "register" | "forgot_password">("login");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  
  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  
  const [forgotEmail, setForgotEmail] = useState("");

  // UI states
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const changeView = (newView: typeof view) => {
    setView(newView);
    setError("");
    setSuccessMessage("");
    setCaptchaVerified(false);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setIsLoading(true);

    if (!captchaVerified) {
      setError("Por favor, confirme que você não é um robô (reCAPTCHA)");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      if (!email || !password) {
        setError("Preencha todos os campos");
        setIsLoading(false);
        return;
      }
      const user = validateCredentials(email, password);
      if (!user) {
        setError("E-mail ou senha incorretos");
        setIsLoading(false);
        return;
      }
      setAuth("demo-token-" + Date.now(), {
        email: user.email,
        name: user.name,
        role: user.role,
      });
      navigate({ to: "/" });
      setIsLoading(false);
    }, 600);
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setIsLoading(true);

    if (!captchaVerified) {
      setError("Por favor, confirme que você não é um robô (reCAPTCHA)");
      setIsLoading(false);
      return;
    }

    // Send access request to admin via email
    const requestOk = await requestAccess(registerEmail, registerName);
    if (!requestOk) {
      setError("Falha ao solicitar acesso. Tente novamente mais tarde.");
      setIsLoading(false);
      return;
    }

    setSuccessMessage("Cadastro recebido! Seu acesso será liberado mediante autorização por e‑mail do administrador.");
    changeView("login");
    setEmail(registerEmail);
    setIsLoading(false);
  };

  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setIsLoading(true);

    if (!captchaVerified) {
      setError("Por favor, confirme que você não é um robô (reCAPTCHA)");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      if (!forgotEmail) {
        setError("Preencha o e-mail");
        setIsLoading(false);
        return;
      }
      // Simulate email sending
      setSuccessMessage(`Um e-mail de recuperação e autorização foi enviado para ${forgotEmail}`);
      changeView("login");
      setIsLoading(false);
    }, 600);
  };



  const benefits = [
    {
      icon: Shield,
      title: "Segurança Premium",
      description: "Acesso criptografado e autenticação em dois fatores",
    },
    {
      icon: CheckCircle2,
      title: "Integração Completa",
      description: "Cotações simultâneas em várias seguradoras",
    },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">Dicoonseguros</span>
          </div>

          <div className="mt-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Centralize cotações, propostas e conversões
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Uma plataforma premium para impulsionar suas vendas de seguros.
            </p>

            <div className="space-y-6">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Illustration placeholder */}
        <div className="relative h-48 -mx-4 -mb-4 rounded-t-2xl bg-gradient-to-t from-primary/20 to-transparent flex items-end justify-center">
          <div className="absolute inset-0 opacity-30 rounded-t-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Right Side - Form Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-foreground">Dicoonseguros</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Bem-vindo</h1>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
            {view === "login" && (
              <>
                <h2 className="text-2xl font-bold text-foreground mb-2">Acessar plataforma</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Cotações simultâneas e gestão comercial em um só lugar
                </p>

                {successMessage && (
                  <div className="mb-6 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-sm text-green-600 dark:text-green-400">
                    {successMessage}
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoFocus
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                      Senha
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <ReCaptcha onVerify={() => setCaptchaVerified(true)} />
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-6 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                        Entrando...
                      </>
                    ) : (
                      "Entrar"
                    )}
                  </button>
                </form>


              </>
            )}

            {view === "register" && (
              <>
                <h2 className="text-2xl font-bold text-foreground mb-2">Criar conta</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Crie sua senha e login para acessar a plataforma
                </p>

                {error && (
                  <div className="mb-6 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="registerName" className="block text-sm font-medium text-foreground mb-2">
                      Nome completo
                    </label>
                    <input
                      id="registerName"
                      type="text"
                      placeholder="Seu nome"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      autoFocus
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="registerEmail" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      id="registerEmail"
                      type="email"
                      placeholder="seu@email.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="registerPassword" className="block text-sm font-medium text-foreground mb-2">
                      Criar Senha
                    </label>
                    <div className="relative">
                      <input
                        id="registerPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <ReCaptcha onVerify={() => setCaptchaVerified(true)} />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-6 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                        Criando...
                      </>
                    ) : (
                      "Criar Conta"
                    )}
                  </button>
                </form>
              </>
            )}

            {view === "forgot_password" && (
              <>
                <h2 className="text-2xl font-bold text-foreground mb-2">Recuperar senha</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Enviaremos um e-mail com instruções para atualizar e autorizar seu acesso.
                </p>

                {error && (
                  <div className="mb-6 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <form onSubmit={handleForgotSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="forgotEmail" className="block text-sm font-medium text-foreground mb-2">
                      E-mail cadastrado
                    </label>
                    <input
                      id="forgotEmail"
                      type="email"
                      placeholder="seu@email.com"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      autoFocus
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <ReCaptcha onVerify={() => setCaptchaVerified(true)} />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-6 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                        Enviando...
                      </>
                    ) : (
                      "Enviar E-mail"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Footer Links */}
          <div className="mt-6 flex flex-col gap-3 text-center">
            {view === "login" && (
              <>
                <button
                  type="button"
                  onClick={() => changeView("forgot_password")}
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Esqueci minha senha
                </button>
                <div className="text-xs text-muted-foreground">
                  Não tem acesso?{" "}
                  <button
                    type="button"
                    onClick={() => changeView("register")}
                    className="text-primary hover:underline font-medium"
                  >
                    Criar conta
                  </button>
                </div>
              </>
            )}
            {view !== "login" && (
              <button
                type="button"
                onClick={() => changeView("login")}
                className="text-sm text-primary hover:underline font-medium"
              >
                Voltar para o login
              </button>
            )}
          </div>

          {/* Terms */}
          <p className="mt-8 text-xs text-muted-foreground text-center">
            Ao acessar, você concorda com nossos{" "}
            <a href="#" className="text-primary hover:underline">
              Termos de Serviço
            </a>{" "}
            e{" "}
            <a href="#" className="text-primary hover:underline">
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

