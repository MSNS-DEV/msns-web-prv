import Link from "next/link";

export default async function HomePage() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          MSNS -  <span className="text-[hsl(280,100%,70%)]">LMS</span> <h2 className="mt-2 text-green-500 text-[3rem]">M.S. NAZ HIGH SCHOOL!</h2>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="/login"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Enroll Now →</h3>
            <div className="text-lg">
              Sign Up or Login
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="/about"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">About School →</h3>
            <div className="text-lg">
              Learn more about M.S.N.S® | WEB
            </div>
          </Link>
        </div>

          </div>
    </main>
  );
}
