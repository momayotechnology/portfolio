"use client";

import { useState } from "react";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="w-full pt-16 mb-16">
      <h2 className="text-[36px] font-bold text-[#2D763A] text-center mt-20">
        Get in touch
      </h2>
      <p className="text-[20px] font-light text-center mt-5">
        We are here to help you with any queries you have.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto px-2">
        {/* input box with label */}

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
              onChange={(e) => setValues({ ...values, email: e.target.value })}
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
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
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
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            className="border-2 border-[#2D763A] px-4 py-4 mt-1 outline-none w-full"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#2D763A] text-white font-bold py-4 px-10 mt-5 hover:shadow-md hover:bg-[#222] transition-all duration-300 ease-in-out"
        >
          Send A Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
