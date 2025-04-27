"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import bcrypt from 'bcryptjs';

export default function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    if (!email || !password || !name) {
      setError("Preencha todos os campos.");
      return;
    }

    // gerar hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase.from('users').insert([
      { email, password: hashedPassword, name }
    ]);

    if (error) {
      console.log(error);
      setError('Erro ao cadastrar.');
      return;
    }

    router.push('/'); // depois de cadastrar, vai pro login
  }

  return (
    <form className="w-full max-w-md flex flex-col" onSubmit={handleRegister}>
      <h1 className="font-bold text-3xl mb-6 text-center">Cadastro</h1>

      <input
        name="name"
        type="text"
        className="p-3 mb-4 border border-gray-300 rounded bg-gray-200"
        placeholder="Digite seu nome"
      />

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
        className="bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold py-3 rounded cursor-pointer"
      >
        Cadastrar
      </button>

      {error && <div className="text-red-500 mt-4">{error}</div>}

      <div className="text-center mt-4">
        Já tem conta? <Link href="/" className="text-blue-600 underline">Fazer login</Link>
      </div>
    </form>
  );
}
