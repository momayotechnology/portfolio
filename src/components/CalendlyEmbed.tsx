import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const CalendlyEmbed = ({
  url,
  setModelOpen,
}: {
  url: string;
  setModelOpen: (value: boolean) => void;
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    if (head) {
      head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        parentRef.current &&
        !parentRef.current.contains(event.target as Node)
      ) {
        console.log("Clicked outside");
        setModelOpen(false);
      }
      console.log("Clicked inside");
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModelOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setModelOpen]);

  return (
    <div className="fixed top-0 left-0 w-full min-h-screen transition duration-300 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50">
      <FaTimes
        className="absolute top-5 right-5 lg:top-8 lg:right-10 text-3xl cursor-pointer text-white"
        onClick={() => setModelOpen(false)}
      />
      <div
        ref={parentRef}
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: "400px", height: "620px" }}
      ></div>
    </div>
  );
};

export default CalendlyEmbed;
