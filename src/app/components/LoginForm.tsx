export default function LoginForm() {
    return (
        <form className="w-full max-w-md flex flex-col">
          <h1 className="font-bold text-3xl mb-6 text-center">Faça Login</h1>
          
          <input
            type="email"
            className="p-3 mb-4 border border-gray-300 rounded bg-gray-200"
            placeholder="Digite seu email"
          />
          
          <input
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
        </form>
    )
}