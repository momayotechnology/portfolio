"use client";

import { TypeAnimation } from "react-type-animation";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-100px)] flex items-center justify-center p-2">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[58px] font-semibold leading-[62px] lg:max-w-xl">
            Momayo Tech
            <br />
            Makes Learning <br />
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
              speed={30}
              style={{ display: "inline-block" }}
              className="text-[#2D763A]"
              repeat={Infinity}
            />
          </h1>
          <p className="text-[22px] leading-[26px] mt-6">
            Momayo Technology is an Independent Software Company that provides
            you different IT services as per your requirement. We provide
            different services including Software and Application Development,
            ICT Consultancy Service and all other ICT related Solution.
          </p>

          <button className="text-[#2D763A] font-[500] hover:opacity-[.95] transition duration-300 py-3 rounded-md mt-4 flex items-center">
            Explore Our Services
            <FiChevronDown className="ml-1" />
          </button>
        </div>
        <div className="min-w-[550px] h-[550px] overflow-hidden md:ml-8 rounded-bl-3xl lg:rounded-bl-[100px]">
          <Image
            src="/assets/women-working-on-image.jpg"
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
