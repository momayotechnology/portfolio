import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-2">
      {/* Site is under maintainence page*/}

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Momayo Technology Pvt. Ltd.</h1>
        <p className="text-lg text-center">
          We are currently under maintainence. We will be back soon.
        </p>
      </div>
    </main>
  );
}
