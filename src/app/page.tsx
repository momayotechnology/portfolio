"use client";

// import components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Customers from "@/components/Customers";
import Services from "@/components/Services";
import Testimonial from "@/components/Recommendation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto mb-10">
          <Hero />
          <Customers />
        </div>
        {/* <div className="bg-[#FAFAFA] w-full py-10">
          <div className="flex flex-col items-center justify-center max-w-6xl mx-auto my-10">
            <Testimonial />
          </div>
        </div> */}

        <Services />

        <div className="w-full max-w-7xl mx-auto">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
