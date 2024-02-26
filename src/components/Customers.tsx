"use client";
import Image from "next/image";

//data
import customers from "@/data/customers.json";

// framer motion thingish
import { motion } from "framer-motion";

const fadeInUpAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.1 * index,
    },
  }),
};

const Customers = () => {
  return (
    <section className="bg-white w-full">
      <div className="py-8 lg:py-16 mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-[28px] md:text-[54px] font-extrabold tracking-tight leading-tight text-center text-gray-900:text-4xl">
          Momayo&apos;s services are loved by 10
          <span className="text-[#2D763A]">+</span> educational institutions.
        </h2>
        <p className="text-[15px] md:text-[16px] leading-[20px] mb-8 max-w-3xl mx-auto text-center">
          Momayo Technology has been providing different IT services to various
          educational institutions. The services provided by Momayo include IT
          Consultation, Educational Management Information System (EMIS) and
          other ICT related solutions.
        </p>

        <div className="grid grid-cols-3 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
          {customers.map((c, index) => (
            <motion.a
              key={c.id}
              href={c.url}
              title={c.name}
              variants={fadeInUpAnimationVariants}
              initial="initial"
              whileInView="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{
                once: true,
              }}
              custom={index}
              className="flex justify-center items-center"
            >
              <img src={c.logo} width={100} height={100} alt={c.name} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
