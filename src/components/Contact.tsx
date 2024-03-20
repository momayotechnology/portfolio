"use client";

import { useState } from "react";
import CalendlyEmbed from "./CalendlyEmbed";

// icons
import { FiArrowRight } from "react-icons/fi";

// toast
import toast from "react-hot-toast";

function Contact() {
  const [modelOpen, setModelOpen] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // send the data to the server
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // clear the input fields
      setValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // show the success message
      toast.success("Message sent successfully");
    } catch (e) {
      console.log(e);
      toast.error("Failed to send the message");
    }
  };

  return (
    <section
      id="contact"
      className="w-full pt-24 mb-20 flex flex-col-reverse md:flex-col gap-6 items-center px-2"
    >
      {modelOpen && (
        <CalendlyEmbed
          setModelOpen={setModelOpen}
          url={
            "https://calendly.com/momayo/inquire?hide_gdpr_banner=1&text_color=2D763A&primary_color=2d763a"
          }
        />
      )}
      <div className="w-full md:w-4xl ">
        <h2 className="text-[36px] font-bold text-[#2D763A] text-left ">
          Get in touch
        </h2>
        <p className="text-[20px] font-light text-left">
          We are here to help you with any queries you have.
        </p>
        <form onSubmit={handleSubmit} className="w-full mx-auto ">
          <div className="flex flex-col mt-5 w-full">
            <label
              htmlFor="name"
              className="text-[#222] text-[16px] leading-[18px]"
            >
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="eg. Aashish Panthi"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              className="border-2 border-[#2D763A] px-4 py-4 mt-1 outline-none w-full"
            />
          </div>

          <div className="flex flex-col md:flex-row mt-5 w-full gap-2">
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="text-[#222] text-[16px] leading-[18px]"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="eg. aashish@momayo.com"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                className="border-2 border-[#2D763A] px-4 py-4 mt-1 outline-none w-full"
              />
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="phone"
                className="text-[#222] text-[16px] leading-[18px]"
              >
                Phone Number{" "}
                <span className="text-[#999] text-[15px]">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="eg. +91 1234567890"
                value={values.phone}
                onChange={(e) =>
                  setValues({ ...values, phone: e.target.value })
                }
                className="border-2 border-[#2D763A] px-4 py-4 mt-1 outline-none w-full"
              />
            </div>
          </div>

          <div className="flex flex-col mt-5 w-full">
            <label
              htmlFor="message"
              className="text-[#222] text-[16px] leading-[18px]"
            >
              Tell us something about your project*
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="eg. I want a EMIS for my school"
              value={values.message}
              onChange={(e) =>
                setValues({ ...values, message: e.target.value })
              }
              className="border-2 border-[#2D763A] px-4 py-4 mt-1 outline-none w-full"
            ></textarea>
          </div>

          <div className="flex w-full justify-between items-center">
            <button
              type="submit"
              className="bg-[#2D763A] text-white font-bold py-4 px-10 mt-5 hover:shadow-md hover:bg-[#222] transition-all duration-300 ease-in-out"
            >
              Send A Message
            </button>

            <button
              onClick={() => setModelOpen(true)}
              type="button"
              className="meetingButton text-[#2D763A] font-bold px-2 mt-5 hover:text-[#222] transition-all duration-300 ease-in-out"
            >
              Schedule a Meeting{" "}
              <FiArrowRight className="meetingIcon inline ml-[0.1rem] transition duration-300" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
