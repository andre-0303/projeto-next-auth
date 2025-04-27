"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";

export default function Profile() {
    const [session, setSession] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
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

    if (!session) {
        return <div>Carregando...</div>; // Você pode adicionar uma tela de loading aqui
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-col items-center mb-6">
                    <h1 className="text-4xl font-semibold text-center text-teal-600">Meu Perfil</h1>
                    <p className="mt-2 text-lg text-gray-600">Aqui estão as informações da sua conta</p>
                </div>

                <div className="space-y-6">
                    <div className="bg-teal-100 p-4 rounded-lg shadow-md">
                        <p className="text-teal-600 font-medium text-lg">Nome</p>
                        <p className="text-gray-800 text-xl">{session?.user?.name}</p>
                    </div>
                    <div className="bg-teal-100 p-4 rounded-lg shadow-md">
                        <p className="text-teal-600 font-medium text-lg">Email</p>
                        <p className="text-gray-800 text-xl">{session?.user?.email}</p>
                    </div>

                    <div className="mt-6 flex justify-center gap-4">
                        <Link href="/profile/edit" className="text-teal-600 hover:underline">
                            Editar Perfil
                        </Link>
                        <Link href="/settings" className="text-teal-600 hover:underline">
                            Configurações
                        </Link>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
}
