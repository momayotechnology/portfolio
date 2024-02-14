import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}

      <main className="flex flex-col items-center justify-center max-w-7xl mx-auto">
        <Hero />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
