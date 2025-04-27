import Image from "next/image";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <RegisterForm />
      </div>

      <div className="w-full md:w-1/2 bg-white md:bg-[#a6c9ff] flex items-center justify-center">
        <Image
          src="/image.png"
          alt="img"
          width={500}
          height={500}
          className="max-w-full h-auto"
        />
      </div>

    </div>
  );
}
