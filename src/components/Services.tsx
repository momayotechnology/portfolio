"use client";
import Image from "next/image";

import { FiArrowRight } from "react-icons/fi";

const Services = () => {
  return (
    <section className="w-full min-h-[700px] bg-[#000] p-4 py-10 my-5">
      <h1 className="text-6xl text-[#2D763A] text-center uppercase font-semibold mt-8">
        Services
      </h1>

      <div className="flex items-center justify-evenly my-8">
        <div className="overflow-hidden w-full h-[400px] md:w-[400px] lg:h-[550px] lg:w-[520px] relative rounded-tr-[100px] flex justify-center">
          <Image
            src="/assets/services/service-1.jpeg"
            width={400}
            height={400}
            layout="responsive"
            alt="service"
            className="object-cover min-w-full min-h-full"
          />

          <div
            className="absolute bottom-0 h-full w-full flex items-end justify-center"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
              pointerEvents: "none",
            }}
          >
            <div className="text-white w-[80%]">
              <h1 className="text-4xl font-[500]">Build with us</h1>
              <p className="text-[16px] leading-[24px] mt-2">
                You need to move faster. You have napkin sketches that need to
                be fleshed out and realized. You need to reinvent your business
                to compete.
              </p>

              <p className="text-[16px] leading-[24px] mt-2">
                We bring startup speed and agility, and enterprise quality and
                scale. We'd love to learn and share more.
              </p>

              <button className="text-[#2D763A] text-[16px] hover:text-[#fff] uppercase font-[600] hover:opacity-[.95] transition duration-300 rounded-md mt-2 mb-5 flex items-center">
                Order now
                <FiArrowRight className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
