import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const shouldHaveShadow = scrollTop > 0;
      setHasShadow(shouldHaveShadow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center min-h-[90px] md:min-h-[105px] px-2 lg:px-0 sticky top-0 bg-[#fff] z-50 ${
        hasShadow ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl w-full">
        <Link href="/" passHref>
          <img
            src="/momayo_long_logo.png"
            alt="logo"
            width={150}
            height={100}
            className="cursor-pointer object-contain w-auto h-[65px] md:h-[90px]"
          />
        </Link>

        <button
          onClick={() => {
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-3 md:px-10 md:py-4 bg-[#2D763A] text-white  hover:shadow-md hover:bg-[#333] transition duration-300"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
