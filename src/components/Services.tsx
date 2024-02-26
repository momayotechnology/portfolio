"use client";
import { useRef, useState, useEffect } from "react";

// framer motion thing
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// data
import data from "@/data/services.json";

// components
import Service from "./Service";

const Services = () => {
  const verticalTargetRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: verticalTargetRef,
    offset: [0.1, 0.85],
  });

  const mobileNumbers = useTransform(
    scrollYProgress,
    [0, 1],
    ["20%", "-1850px"]
  );

  const desktopNumbers = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["25%", "-60%", "-100%", "-150%", "-200%", "-235%"]
  );

  let x: any;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  x = isMobile ? mobileNumbers : desktopNumbers;

  return (
    <section
      ref={verticalTargetRef}
      id="services"
      className="w-full min-h-[350vh] bg-[#000] p-4 py-10"
    >
      <div className="sticky top-[125px] md:top-[140px]">
        <h1 className="text-4xl lg:text-6xl text-[#2D763A] text-center uppercase font-semibold mt-16 lg:mt-8">
          Services
        </h1>

        <div className="mt-16 lg:my-8 max-w-7xl mx-auto overflow-x-hidden">
          <motion.div
            className="flex gap-16 md:gap-48 flex-row items-center flex-grow-1 flex-shrink-0 w-full"
            style={{ x }}
          >
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
