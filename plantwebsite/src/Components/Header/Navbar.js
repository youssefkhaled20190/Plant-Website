import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import LeaftImage from "../../assets/img/leaf-1.png";
import LeaftImage2 from "../../assets/img/leaf-2.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="Navbar"
      className={`bg-green-950 fixed w-full top-0 left-0 z-50 duration-300 ${
        scrolling ? "border-b border-yellow-500" : ""
      }`}
    >
      <nav className="container flex justify-between h-16 sm:h-20">
        <div className="font-Lobster sm:text-2xl">IndorPlants.</div>

        <div
          id="nav-menu"
          className={`absolute top-0 ${
            menuOpen ? "left-0" : "-left-full"
          } min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex flex-col items-center justify-center gap-8 duration-300 lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
        >
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            <li>
              <a href="#Home" className="nav-link" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="nav-link" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#Populer" className="nav-link" onClick={handleLinkClick}>
                Populer
              </a>
            </li>
            <li>
              <a href="#Review" className="nav-link" onClick={handleLinkClick}>
                Review
              </a>
            </li>
          </ul>

          <div className="absolute bottom-0 -right-2 opacity-90 lg:hidden">
            <img src={LeaftImage} alt="img1" className="w-32" />
          </div>

          <div className="absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden">
            <img src={LeaftImage2} alt="img1" className="w-32" />
          </div>
        </div>

        <div
          id="hamburger"
          className="text-2xl sm:text-3xl cursor-pointer z-50 lg:hidden"
          onClick={toggleMenu}
        >
          <i
            className={
              menuOpen ? "ri-close-large-line" : "ri-menu-4-line"
            }
          ></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
