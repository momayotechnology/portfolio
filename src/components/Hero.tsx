"use client";

import { TypeAnimation } from "react-type-animation";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-100px)] flex items-center justify-center p-2 lg:px-0">
      <div className="flex items-center justify-between flex-col-reverse md:flex-row">
        <div>
          <h1 className="text-[28px] md:text-[72px] font-semibold leading-[30px] md:leading-[75px] lg:max-w-xl">
            Momayo Tech <br className="hidden md:block" />
            Makes Learning <br className="hidden md:block" />
            <TypeAnimation
              sequence={[
                "Interactive.",
                1500,
                "Affordable.",
                1500,
                "Engaging.",
                1500,
                "Accessible.",
                1500,
              ]}
              wrapper="span"
              speed={25}
              style={{ display: "inline-block" }}
              className="text-[#2D763A]"
              repeat={Infinity}
            />
          </h1>
          <p className="text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] mt-6">
            Momayo Technology is an Independent Software Company that provides
            you different IT services as per your requirement. We provide
            different services including Software and Application Development,
            ICT Consultancy Service and all other ICT related Solution.
          </p>

          <button
            className="text-[#2D763A] text-[16px] md:text-[18px] hover:text-[#333] uppercase font-[600] hover:opacity-[.95] transition duration-300 py-3 rounded-md mt-4 flex items-center"
            onClick={() => {
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Our Services
            <FiChevronDown className="ml-1" />
          </button>
        </div>

        <div className="my-4 w-full h-[300px] md:min-w-[600px] md:h-[600px] overflow-hidden md:ml-8 rounded-bl-3xl lg:rounded-bl-[100px]">
          <Image
            src="/assets/women_working_on_image.jpg"
            width={400}
            height={400}
            layout="responsive"
            alt="Hero"
            className="object-cover min-w-full min-h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
