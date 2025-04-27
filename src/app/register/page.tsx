import Image from "next/image";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Formulário primeiro */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <RegisterForm />
      </div>

      {/* Imagem à direita */}
      <div className="w-full md:w-1/2 bg-white md:bg-[#00DFC0] flex items-center justify-center">
        <Image
          src="/download(1).png"
          alt="img"
          width={450}
          height={450}
          className="max-w-full h-auto"
        />
      </div>

    </div>
  );
}
