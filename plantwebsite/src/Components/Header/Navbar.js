import React from "react";
import "remixicon/fonts/remixicon.css";
import LeaftImage from "../../assets/img/leaf-1.png"
import LeaftImage2 from "../../assets/img/leaf-2.png"
function Navbar() {
    return (
        <header id="Navbar" class="bg-green-950 fixed w-full top-0 left-0 z-50">
            <nav class="container flex justify-between h-16 sm:h-20">
                <div class="font-Lobster sm:text-2xl">IndorPlants.</div>
                <div id="nav-menu" class="absolute top-0 left-[-100%] min-h-[80vh] w-full 
                bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300
                overflow-hidden
                ">
                    <ul class="flex flex-col items-center gap-8">
                        <li>
                            <a href="#Home" className="nav-link">Home</a>
                        </li>

                        <li>
                            <a href="#About" className="nav-link">About</a>
                        </li>

                        <li>
                            <a href="#Populer" className="nav-link">Populer</a>
                        </li>

                        <li>
                            <a href="#Review" className="nav-link">Review</a>
                        </li>
                    </ul>
                    <div class="absolute bottom-0 -right-10 opacity-90">
                        <img src={LeaftImage} alt="img1"  class="w-32"></img>
                    </div>

                    <div class="absolute -top-5 -left-5 rotate-90 opacity-90">
                        <img src={LeaftImage2} alt="img1" class="w-32"></img>
                    </div>
                    <div>
                        <i class="ri-menu-4-line"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;