// import components
import Hero from "@/components/Hero";
import Customers from "@/components/Customers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}

      <main className="flex flex-col items-center justify-center max-w-7xl mx-auto">
        <Hero />
        <Customers />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
