import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}

      <main className="flex flex-col items-center justify-center max-w-8xl">
        <Hero />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
