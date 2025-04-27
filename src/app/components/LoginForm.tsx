"use client";

import React from "react";
import { signIn } from 'next-auth/react';
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    };

    await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/dashboard",
    });
  }

  return (
    <form className="w-full max-w-md flex flex-col" onSubmit={handleLogin}>
      <h1 className="font-bold text-3xl mb-6 text-center">Faça Login</h1>

      <input
        name="email"
        type="email"
        className="p-3 mb-4 border border-gray-300 rounded bg-gray-200"
        placeholder="Digite seu email"
      />

      <input
        name="password"
        type="password"
        className="p-3 mb-6 border border-gray-300 rounded bg-gray-200"
        placeholder="Digite sua senha"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded cursor-pointer"
      >
        Login
      </button>

      {error === 'CredentialsSignin' && <div className="text-red-500 mt-4">Email ou senha incorretos</div>}

      <div className="text-center mt-4">
        Não tem conta? <Link href="/register" className="text-blue-600 underline">Cadastre-se</Link>
      </div>
    </form>
  );
}
