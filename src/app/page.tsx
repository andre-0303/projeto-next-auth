import Image from "next/image";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      <div className="w-full md:w-1/2 bg-white md:bg-[#00DFC0] flex items-center justify-center">
        <Image
          src="/download(1).png"
          alt="img"
          width={450}
          height={450}
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <LoginForm />
      </div>

    </div>
  );
}
