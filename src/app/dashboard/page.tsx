"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LogoutButton from "../components/LogoutButton";
import { getSession } from "next-auth/react"; 
import Link from "next/link";

export default function Page() {
    const [session, setSession] = useState<any>(null);
    const [userStats, setUserStats] = useState({ posts: 0, comments: 0, likes: 0 });
    const router = useRouter();

    useEffect(() => {
        // Obtendo a sessão no cliente
        const fetchSession = async () => {
            const sessionData = await getSession();
            if (!sessionData) {
                router.push('/'); // Se não estiver logado, redireciona para login
            } else {
                setSession(sessionData);
            }
        };

        fetchSession();
    }, [router]);

    // Simulação de dados (pode ser substituída por uma API real)
    useEffect(() => {
        if (session) {
            setTimeout(() => {
                setUserStats({
                    posts: 5,
                    comments: 15,
                    likes: 20,
                });
            }, 1000);
        }
    }, [session]);

    if (!session) {
        return null; // Você pode adicionar um carregando ou algo similar
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-col items-center mb-6">
                    <h1 className="text-4xl font-semibold text-center text-teal-600">Bem-vindo(a) ao Dashboard!</h1>
                    <p className="mt-2 text-lg text-gray-600">Olá, <span className="font-semibold">{session?.user?.name}</span></p>
                </div>

                <div className="mt-8">
                    <div className="text-center">
                        <p className="text-xl text-gray-700 mb-4">Aqui está um resumo das suas atividades:</p>

                        {/* Estatísticas do usuário */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            <div className="bg-teal-100 p-4 rounded-lg shadow-md">
                                <p className="text-teal-600 font-medium text-lg">Postagens</p>
                                <p className="text-gray-800 text-2xl font-semibold">{userStats.posts}</p>
                            </div>
                            <div className="bg-teal-100 p-4 rounded-lg shadow-md">
                                <p className="text-teal-600 font-medium text-lg">Comentários</p>
                                <p className="text-gray-800 text-2xl font-semibold">{userStats.comments}</p>
                            </div>
                            <div className="bg-teal-100 p-4 rounded-lg shadow-md">
                                <p className="text-teal-600 font-medium text-lg">Curtidas</p>
                                <p className="text-gray-800 text-2xl font-semibold">{userStats.likes}</p>
                            </div>
                        </div>

                        {/* Link para outras páginas */}
                        <div className="mb-6">
                            <p className="text-lg text-gray-700">Explore mais funcionalidades do seu painel de controle:</p>
                            <div className="flex justify-center gap-4 mt-4">
                                <Link href="/settings" className="text-teal-600 hover:underline">Configurações</Link>
                                <Link href="/profile" className="text-teal-600 hover:underline">Meu Perfil</Link>
                            </div>
                        </div>

                        <div>
                            <LogoutButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
