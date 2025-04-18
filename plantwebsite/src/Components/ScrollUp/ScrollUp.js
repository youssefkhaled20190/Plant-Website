import React, { useEffect, useRef, useState } from "react";

function ScrollUpButton() {
  const scrollRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY >= 250);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#"
      ref={scrollRef}
      className={`fixed right-4 ${
        showButton ? "bottom-4" : "-bottom-1/2"
      } bg-yellow-500 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg 
      z-50 hover:translate-y-1 duration-300`}
    >
      <i className="ri-arrow-up-line"></i>
    </a>
  );
}

export default ScrollUpButton;
