"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import bcrypt from 'bcryptjs';
import { FaEye, FaEyeSlash } from "react-icons/fa"; // ícones para mostrar/ocultar a senha

export default function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); // Inicia o carregamento

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    if (!email || !password || !name) {
      setError("Preencha todos os campos.");
      setLoading(false);
      return;
    }

    // Validação simples de e-mail e senha
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("E-mail inválido.");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres.");
      setLoading(false);
      return;
    }

    // Gerar hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase.from('users').insert([
      { email, password: hashedPassword, name }
    ]);

    if (error) {
      console.log(error);
      setError('Erro ao cadastrar.');
      setLoading(false);
      return;
    }

    // Limpar campos e redirecionar após o sucesso
    setPassword("");
    setError(null);
    router.push('/'); // Depois de cadastrar, vai para o login
    setLoading(false);
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

      <div className="relative mb-6">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 mb-4 w-full border border-gray-300 rounded bg-gray-200"
          placeholder="Digite sua senha"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <button
        type="submit"
        className="bg-[#007dfe] hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded cursor-pointer"
        disabled={loading}
      >
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>

      {error && <div className="text-red-500 mt-4">{error}</div>}

      <div className="text-center mt-4">
        Já tem conta? <Link href="/" className="text-blue-600 underline">Fazer login</Link>
      </div>
    </form>
  );
}
