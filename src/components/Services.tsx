"use client";
import Image from "next/image";
import { useRef } from "react";

import { FiArrowRight } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";

// data
import data from "@/data/services.json";

const Services = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-85%"]); // Adjust the range and values here

  return (
    <section
      ref={targetRef}
      className="w-full min-h-[250vh] bg-[#000] p-4 py-10 my-5"
    >
      <div className="sticky top-[125px] md:top-[140px]">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-[#2D763A] text-center uppercase font-semibold mt-8">
          Services
        </h1>

        <div className="my-8 max-w-7xl mx-auto overflow-x-hidden">
          <motion.div className="flex items-center gap-20" style={{ x }}>
            {data.map((service) => (
              <div
                key={service.id}
                className="overflow-hidden w-full h-[400px] md:min-w-[400px] md:w-[400px] lg:h-[550px] lf:min-w-[550px] lg:w-[550px] relative rounded-tr-[100px] flex justify-center"
              >
                <Image
                  src={service.image}
                  width={400}
                  height={400}
                  layout="responsive"
                  alt="service"
                  className="object-cover min-w-full min-h-full"
                />

                <div
                  className="absolute top-0 h-full w-full left-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                    pointerEvents: "none",
                  }}
                ></div>

                <div className="absolute bottom-0 w-full flex items-end justify-center">
                  <div className="text-white w-[85%]">
                    <h1 className="text-2xl md:text-4xl font-[500]">
                      {service.title}
                    </h1>
                    {service.description &&
                      service.description.length > 0 &&
                      service.description.map((desc, index) => (
                        <p className="text-[14px] md:text-[16px] leading-[24px] mt-2">
                          {desc}
                        </p>
                      ))}

                    <button className="text-[#2D763A] text-[14px] md:text-[16px] hover:text-[#fff] uppercase font-[600] hover:opacity-[.95] transition duration-300 rounded-md mt-2 mb-5 flex items-center">
                      {service.cta_txt}
                      <FiArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
