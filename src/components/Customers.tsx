"use client";
import Image from "next/image";

const Customers = () => {
  return (
    <section className="bg-white w-full">
      <div className="py-8 lg:py-16 mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-[28px] md:text-[54px] font-extrabold tracking-tight leading-tight text-center text-gray-900:text-4xl">
          Momayo's services are loved by 10
          <span className="text-[#2D763A]">+</span> educational institutions.
        </h2>
        <p className="text-[15px] md:text-[16px] leading-[20px] mb-8 max-w-3xl mx-auto text-center">
          Momayo Technology has been providing different IT services to various
          educational institutions. The services provided by Momayo include IT
          Consultation, Educational Management Information System (EMIS) and
          other ICT related solutions.
        </p>

        <div className="grid grid-cols-3 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
          <a
            href="https://lbu.edu.np"
            className="flex justify-center items-center"
            title="Lumbini Buddhist University"
          >
            <Image
              src="/assets/customers/lbu.webp"
              width={100}
              height={100}
              alt="LBU"
            />
          </a>
          <a
            href="https://rju.edu.np/"
            className="flex justify-center items-center"
            title="Rajarshi Janak University"
          >
            <Image
              src="/assets/customers/rju.png"
              width={100}
              height={100}
              alt="RJU"
            />
          </a>
          <a
            href="https://nabin.edu.np/"
            className="flex justify-center items-center"
            title="Nabin Audhyogic Kadar Bahadur Rita Secondary School"
          >
            <Image
              src="/assets/customers/nabin.png"
              width={100}
              height={100}
              alt="Nabin Audhyogic Kadar Bahadur Rita Secondary School "
            />
          </a>

          <a
            href="https://annapurnabtl.edu.np"
            className="flex justify-center items-center"
            title="Annapurna Secondary School/Model College"
          >
            <Image
              src="/assets/customers/annapurna.jpg"
              width={100}
              height={100}
              alt="Annapurna Secondary School/Model College"
            />
          </a>

          <a
            href="https://newpinewoodebs.edu.np/"
            className="flex justify-center items-center"
            title="New Pinewood English Boarding School"
          >
            <Image
              src="/assets/customers/pinewood.png"
              width={100}
              height={100}
              alt="New Pinewood English Boarding School "
            />
          </a>

          <a
            href="https://flaircode.com.np/"
            className="flex justify-center items-center"
            title="Flaircode School of Bar Barista and Beverage Management"
          >
            <Image
              src="/assets/customers/flaircode.jpg"
              width={100}
              height={100}
              alt="Flaircode School of Bar Barista and Beverage Management "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Customers;
