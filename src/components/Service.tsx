import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

interface ServiceProps {
  id: number;
  title: string;
  description: string[];
  image: string;
  cta_txt: string;
  cta_link: string;
}

const Service = ({ service }: { service: ServiceProps }) => {
  return (
    <div className="overflow-hidden w-full h-[400px] md:min-w-[400px] md:w-[400px] lg:h-[550px] lf:min-w-[550px] lg:w-[550px] relative rounded-tr-[100px] flex justify-center">
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
          <h1 className="text-2xl md:text-4xl font-[500]">{service.title}</h1>
          {service.description &&
            service.description.length > 0 &&
            service.description.map((desc, index) => (
              <p
                key={index}
                className="text-[14px] md:text-[16px] leading-[24px] mt-2"
              >
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
  );
};

export default Service;
