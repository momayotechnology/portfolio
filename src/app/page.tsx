"use client";

// import components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Customers from "@/components/Customers";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
          <Hero />
          <Customers />
        </div>

        <Services />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
