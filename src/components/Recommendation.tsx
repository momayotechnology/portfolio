import React from "react";
import Image from "next/image";

function Recommendation() {
  return (
    <div className="flex items-center justify-between bg-[#fff] relative py-4 rounded-lg rounded-br-[40px] shadow-sm">
      <Image
        src="/assets/testimonials/Tilak_Acharya.png"
        width={300}
        alt="Tilak Acharya"
        height={300}
        className="object-contain w-auto absolute bottom-0 left-0 rounded-bl-lg"
      />

      <div className="w-[300px] h-auto mr-32 hidden md:block"></div>

      <div>
        <p className="text-[20px] font-light">
          It would have taken months to build the product team that we inherited
          overnight with Leapfrog. They’re built for startup speed, and they
          have consistently delivered a well-engineered product for us.
          consistently delivered a well-engineered product for us.
        </p>

        <h3 className="text-[24px] font-bold text-[#2D763A] mt-5 leading-[36px]">
          Russ Richmond, MD
        </h3>
        <h4 className="font-light text-[14px] leading-[18px]">
          CEO of Laudio, recognized in KLAS 2022 Emerging Solutions
        </h4>
      </div>
    </div>
  );
}

export default Recommendation;
