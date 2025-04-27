import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import LogoutButton from "../components/LogoutButton"

export default async function Page() {
    const session = await getServerSession()

    if (!session) {
        redirect('/')
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
                        <p className="text-xl text-gray-700 mb-4">Você está logado. Aqui está seu painel de controle:</p>
                        <div className="bg-teal-100 p-4 rounded-lg mb-4 shadow-md">
                            <p className="text-teal-600 font-medium">Aqui você pode acessar suas informações e configurações.</p>
                        </div>
                        <div>
                            <LogoutButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
