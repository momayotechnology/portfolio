import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaRegClock,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhone,
  FaVoicemail,
  FaCalendarWeek,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const footer = () => {
  return (
    <div>
      <div className="bg-gray-50 py-16 px-3 md:px-16">
        <div className="container mx-auto flex flex-col space-y-24 ">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="col-span-1 flex flex-row space-x-3">
              <FaMapMarkedAlt className="w-12 h-12 text-[#E65625]  p-1" />
              <div className="space-y-1">
                <p className="text-gray-500">ADDRESS</p>
                <p className="text-gray-600 font-medium">
                  Pingalasthan Kathmandu, Nepal
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaPhoneAlt className="w-12 h-12 text-[#E65625]  p-1" />
              <div className="space-y-1">
                <p className="text-gray-500">PHONE</p>
                <p className="text-gray-600 font-medium">(+977) 986-70-10372</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaRegClock className="w-12 h-12 text-[#E65625]  p-1" />
              <div className="space-y-1">
                <p className="text-gray-500">WORKING HOURS</p>
                <p className="text-gray-600 font-medium">
                  SUN-FRI: 10:00 - 17:00 SAT: CLOSED
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="col-span-1 space-y-8">
              <Image
                src="/momayo_long_logo.png"
                width={175}
                height={100}
                alt="Logo"
                className="object-contain w-auto h-auto"
              />

              <p className="text-gray-500">
                Momayo Technology has provided tech services in Nepal since
                2017. What started as a small company has grown into a
                full-fledged IT company that provides a wide range of services
                for higher education institutions.
              </p>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">OUR SERVICES</p>
                <p className="border-solid border border-[#2D763A]  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">
                    Higher Education IT Consultation
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">
                    Google Workspace and Microsoft 365 Consultation
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Custom Software Development</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">
                    Government Software Procurement Consultation
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Cloud Consultation</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">Momayo Tech</p>
                <p className="border-solid border border-[#2D763A]  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-gray-500  font-light" />
                  <p className="text-gray-500">
                    Pingalasthan 44600 Kathmandu, Bagmati Nepal
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">(+977) 986-70-10372</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaVoicemail className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500"> contact@momayo.com</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaCalendarWeek className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">Sun-Fri: 10:00 - 17:00</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">SUBSCRIBE</p>
                <p className="border-solid border border-[#2D763A]  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-[#2D763A] text-gray-900 focus:ring-[#E65625] focus:border-[#E65625] block w-full p-2.5"
                  placeholder="name@yourcompany.com"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-[#2D763A] hover:bg-[#222] transition duration-300 focus:ring-4 focus:ring-[#E65625] font-medium w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 px-2 container mx-auto flex justify-between flex-col-reverse items-center md:flex-row ">
        <p className="text-center w-full">
          © Copyright {new Date().getFullYear()}{" "}
          <Link
            href="https://momayo.com"
            className="text-[#2D763A] hover:underline"
          >
            Momayo Technology Pvt. Ltd
          </Link>
          . All rights reserved.
        </p>
        <div className="flex flex-row space-x-3 mb-2 md:mb-0">
          <Link
            href="https://www.facebook.com/momayotech"
            className="text-gray-500 hover:text-gray-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-5 h-5" />
          </Link>

          <Link
            href="https://www.instagram.com/momayotech"
            className="text-gray-500 hover:text-gray-400 transition duration-300"
            target="_blank"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>

          <Link
            href="https://wa.me/9779867010372"
            target="_blank"
            className="text-gray-500 hover:text-gray-400 transition duration-300"
          >
            <FaWhatsapp className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default footer;
