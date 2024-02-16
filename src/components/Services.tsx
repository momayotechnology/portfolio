"use client";
import { useRef } from "react";

// framer motion thing
import { motion, useScroll, useTransform } from "framer-motion";

// data
import data from "@/data/services.json";

// components
import Service from "./Service";

const Services = () => {
  const verticalTargetRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: verticalTargetRef,
    offset: [0, 0.85],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-85%"]); // Adjust the range and values here

  return (
    <section
      ref={verticalTargetRef}
      id="services"
      className="w-full min-h-[250vh] bg-[#000] p-4 py-10"
    >
      <div className="sticky top-[125px] md:top-[140px]">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-[#2D763A] text-center uppercase font-semibold mt-8">
          Services
        </h1>

        <div className="my-8 max-w-7xl mx-auto overflow-x-hidden">
          <motion.div className="flex items-center gap-20" style={{ x }}>
            {data.map((service) => (
              <Service key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
