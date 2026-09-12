import Link from "next/link";
import Image from "next/image";
import { PawPrint } from "@/app/components/common/PawPrint";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center pt-20 px-4 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute left-[10%] bottom-[20%] opacity-10">
        <PawPrint className="w-16 h-16 text-[#ffb016]" />
      </div>
      <div className="absolute right-[15%] bottom-[15%] opacity-10">
        <PawPrint className="w-24 h-24 text-[#ffb016]" />
      </div>

      <div className="text-center z-10 max-w-2xl mx-auto w-full">
        {/* Eyebrow with paw */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-[#ffb016]/40"></div>
          <PawPrint className="w-5 h-5 text-[#ffb016]" fill="#ffb016" />
          <div className="h-[1px] w-12 bg-[#ffb016]/40"></div>
        </div>

        {/* 404 Heading */}
        <h1 className="text-9xl md:text-[12rem] font-extrabold text-[#0b1324] font-serif leading-none mb-2">
          404
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-[#0b1324] font-serif mb-6">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
          We're sorry, but the page you're looking for doesn't exist or has been moved.<br />
          Let's get you back on track!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/"
            className="w-full sm:w-auto bg-[#ffb016] hover:bg-[#e69300] text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-center"
          >
            Go to Home
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto bg-white border-2 border-[#ffb016] text-[#ffb016] hover:bg-[#ffb016] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
          >
            Explore Services
          </Link>
        </div>

        {/* Dog Image */}
        <div className="relative w-full max-w-xl mx-auto h-[300px] md:h-[400px]">
          {/* Decorative background shape for the dog */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="w-[80%] h-[80%] bg-[#fffaf5] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-2 border-dashed border-[#ffb016]/20"></div>
          </div>
          
          <Image
            src="/images/404.png"
            alt="404 Dog"
            fill
            className="object-contain object-bottom relative z-10"
            priority
          />
        </div>
      </div>
    </main>
  );
}
