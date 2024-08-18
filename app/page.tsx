import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between bg-[#F8F7F2]">
      <header className="w-full flex justify-between p-6 bg-white shadow-md ">
        <nav className="flex space-x-6 text-sm font-semibold text-gray-400">
          <a href="#" className="hover:text-[#D35400]">Home</a>
          <a href="#" className="hover:text-[#D35400]">About</a>
          <a href="#" className="hover:text-[#D35400]">Service</a>
          <a href="#" className="hover:text-[#D35400]">Portfolio</a>
          <a href="#" className="hover:text-[#D35400]">News</a>
          <a href="#" className="hover:text-[#D35400]">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <span className="text-sm font-semibold">Follow Us:</span>
          <a href="#" className="hover:text-[#D35400]">Twitter</a>
          <a href="#" className="hover:text-[#D35400]">Facebook</a>
          <a href="#" className="hover:text-[#D35400]">Instagram</a>
        </div>
      </header>

      <section className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl p-8">
        <div className="flex flex-col items-start lg:items-start lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold">
            <span className="text-[#D35400]">I AM</span> VIVEK.
          </h1>
          <p className="text-lg text-gray-600">WELCOME TO MY AGENCY</p>
          <a href="#" className="text-base font-semibold underline hover:text-[#D35400]">
            See All Projects &rarr;
          </a>
        </div>
        <div className="relative mt-10 lg:mt-0 lg:ml-10 lg:w-1/2">
          <div className="absolute top-0 left-0 w-[350px] h-[400px] bg-no-repeat bg-contain"
               style={{ backgroundImage: "url('/background.png')" }}>
          </div>
          <Image
            src="/Vivek.png"
            alt="Vivek"
            width={350}
            height={400}
            className="relative z-10 rounded-lg"
          />
        </div>
      </section>
    </main>
  );
}