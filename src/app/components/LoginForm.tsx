"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validação de campos
    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/dashboard",
    });

    setLoading(false);

    if (res?.error) {
      console.log("Erro no login:", res.error);
    } else {
      window.location.href = res?.url || "/dashboard";
    }
  }

  return (
    <form
      className="w-full max-w-md flex flex-col bg-white p-8 rounded-lg shadow-md"
      onSubmit={handleLogin}
    >
      <h1 className="font-bold text-3xl mb-6 text-center">Faça Login</h1>

      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 mb-4 border border-gray-300 rounded bg-gray-200"
        placeholder="Digite seu email"
        aria-label="Digite seu e-mail"
      />

      <div className="relative">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 mb-6 border border-gray-300 rounded bg-gray-200 w-full"
          placeholder="Digite sua senha"
          aria-label="Digite sua senha"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-blue-600"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <button
        type="submit"
        className={`bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={loading}
      >
        {loading ? "Carregando..." : "Login"}
      </button>

      {error === "CredentialsSignin" && (
        <div className="text-red-500 mt-2">E-mail ou senha incorretos.</div>
      )}

      <div className="flex items-center justify-between mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          Lembrar de mim
        </label>
        <div className="text-right">
          <a
            href="/reset-password"
            className="text-blue-600 hover:underline"
          >
            Esqueceu sua senha?
          </a>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full py-3 mb-4 bg-red-500 hover:bg-red-600 cursor-pointer text-white font-semibold rounded flex items-center justify-center gap-2"
        >
          <FaGoogle />
          Login com Google
        </button>

        <button
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          className="w-full py-3 bg-gray-700 hover:bg-gray-800 cursor-pointer text-white font-semibold rounded flex items-center justify-center gap-2"
        >
          <FaGithub />
          Login com GitHub
        </button>
      </div>

      <div className="text-center mt-4">
        <p>
          Não tem uma conta?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Faça seu cadastro
          </a>
        </p>
      </div>
    </form>
  );
}
