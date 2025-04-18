import React from "react";
import floral from "../../assets/img/floral-1.png"
import useScrollReveal from "../../Hooks/useScrollReveal";

function Footer() {

    useScrollReveal(".footer___icon , .footer___content , .copy__right")
    useScrollReveal(".footer_floral" , {delay:500 , scale:0.5})

    return (

        <footer class="bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative">
            {/* newssteller */}
            <div class="container text-white absolute top-0 left-0 right-0 -translate-y-1/2">
                <div class="bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md">
                    <h3>
                        <span class="text-yellow-500">Subscribe</span> to our newsletter
                    </h3>

                    <div class="flex flex-col md:flex-row gap-1">
                        <input type="email" placeholder="Your Email Address"
                            class="w-full px-5 py-3 text-green-900 rounded-md outline-none"
                        />
                        <button class="flex items-center justify-center gap-1 bg-green-950 px-5 
                        py-3 rounded-md hover:opacity-80 duration-300
                        ">
                            <span>Subscribe</span>
                            <i class="ri-send-plane-2-fill"></i>
                        </button>

                    </div>
                </div>
            </div>

            {/* social Icons */}

            <div class=" footer___icon container mt-16 mb-10">
                <div class="border-b border-green-500 relative">
                    <div class="absolute top-0 transform -translate-y-1/2 left-0
                    right-0 max-w-36 mx-auto
                    ">
                        <div class="bg-yellow-100 text-lg text-center space-x-2">
                            <i class="ri-facebook-fill hover:text-yellow-500 
                            duration-300 cursor-pointer
                            "></i>
                            <i class="ri-twitter-x-line hover:text-yellow-500 
                            duration-300 cursor-pointer
                            "></i>
                            <i class="ri-instagram-line hover:text-yellow-500 
                            duration-300 cursor-pointer
                            "></i>
                            <i class="ri-linkedin-fill hover:text-yellow-500 
                            duration-300 cursor-pointer
                            "></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* quick links */}

            <div class="footer___content container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            xl:grid-cols-4 gap-8 text-center md:text-start
            ">
                {/* item 1 */}
                <div>
                    <div class="text-7xl text-green-700 text-center inline-block">
                        <i class="ri-leaf-fill"></i>
                        <p class="font-Lobster text-xl sm:text-2xl"> IndorePlants.</p>
                    </div>
                </div>

                {/* item 2 */}

                <div>
                    <p class="mb-5 font-bold text-xl"> quick Link</p>

                    <div class="flex flex-col gap-1">
                        <a href="#">Plants</a>
                        <a href="#">Flowers</a>
                        <a href="#">Gerdening</a>
                        <a href="#">Seeds</a>
                        <a href="#">Shipping</a>
                    </div>
                </div>


                   {/* item 3 */}

                <div>
                    <p class="mb-5 font-bold text-xl">Popular Services</p>

                    <div class="flex flex-col gap-1">
                        <a href="#">Tree Planting</a>
                        <a href="#">Grass Cutting</a>
                        <a href="#">Weeds Control</a>
                        <a href="#">Project</a>
                    </div>
                </div>

                {/* item 4  */}

                <div>
                    <p class="mb-5 font-bold text-xl">Contact Us</p>

                    <div class="flex flex-col gap-1">
                        <a href="tel:+8833378901">+88 333 78 901</a>
                        <a href="mailto:lightcodecamp@gmail.com">lightcodecamp@gmail.com</a>
                        <br/>
                        <p>1234 Tailwind Ave, CSS City, Webland 56789, USA</p>
                    </div>
                </div>

                {/* copyright */}

                <div class="copy__right container">
                    <p class="text-center mt-10 opacity-50">
                    Copyright &copy; 2024 LightCode. All rights reserved.

                    </p>
                </div>

                {/* floral image */}

                <div class="footer_floral absolute bottom-0 left-0 opacity-20 pointer-events-none">
                    <img src={floral} alt="floral_image" class="w-full lg:w-1/2"/>
                </div>


            </div>
        </footer>
    );
}

export default Footer;