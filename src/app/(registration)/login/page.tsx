import Image from "next/image";

export default function loginPage() {
  return (
    <section className="col-span-12 grid  place-content-center bg-[url('/jpg/Schoolview.jpg')] bg-cover">
      <div className="grid h-[50rem] w-[30rem] place-items-center gap-6 rounded-lg bg-green-500/40 shadow-lg">
        <div className="grid gap-4">
          <Image
            src={"/logo/off_logo_green.png"}
            alt="logo"
            width={350}
            height={350}
          />
          <h1 className="text-5xl text-center font-bold text-yellow-600">MSNS-LMS </h1>
        
        </div>
      </div>
    </section>
  );
}