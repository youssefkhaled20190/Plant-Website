import React from "react";
import "remixicon/fonts/remixicon.css";
import BannerImage from "../../assets/img/home.png"

import useScrollReveal from "../../Hooks/useScrollReveal";

function Banner() {

    useScrollReveal(".home___data")
    useScrollReveal(".home___image" , {delay:500 , scale:0.5})
    return (
        <>
            <section id="Home" class="relative">
                {/* content*/}
                <div class="container">

                    {/* blob */}
                    <div class="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 
                    opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2
                    -translate-y-1/2
                    "> </div>

                    <div class="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 
                    opacity-40 absolute right-0 bottom-0
                    "> </div>


                    <div class="flex flex-col items-center gap-5 lg:flex-row">
                        <div class=" home___data w-full space-y-5 lg:w-1/2">

                            <h1>
                                <span class="text-yellow-500">Plants</span>make a
                                <br />
                                positive
                                <span class="text-yellow-500">impact</span>on
                                <br /> your enviroment
                            </h1>

                            <p class="text-slate-300 font-Lobster">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                <br />
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.
                            </p>

                            <div class="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10">
                                <button class="btn">
                                    <span>Shop Now</span>
                                    < i class="ri-leaf-line"></i>
                                </button>

                                <button class="btn btn_outline">
                                    <span>Know More</span>
                                    < i class="ri-leaf-line"></i>
                                </button>
                            </div>

                            
                            <p class="text-xs font-Lobster text-slate-300">You will get 30-days free trial.</p>
                            <div class="flex items-center gap-5 text-lg lg:pt-10">
                                <i class="ri-facebook-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer "></i>
                                <i class="ri-instagram-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                                <i class="ri-twitter-x-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
                                <i class="ri-linkedin-box-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
                            </div>



                        </div>
                    
                            {/* image */}

                            <div class="w-full relative lg:w-1/2">
                                <img src={BannerImage} alt="banner" class="home___image"></img>

                                <div class="absolute -top-10 right-0 opacity-30 xl:top-5 animate-movingY">
                                    <i class="ri-leaf-line text-6xl text-yellow-500"></i>
                                </div>

                                <div class="absolute bottom-0 left-0 opacity-30 xl:bottom-12 animate-rotating ">
                                    <i class="ri-flower-line text-6xl text-yellow-500"></i>
                                </div>

                                <div class=" hidden absolute -top-8 -left-5 opacity-30 lg:block animate-scalingUp">
                                    <i class="ri-plant-line text-6xl text-yellow-500"></i>
                                </div>

                            </div>
                    </div>
                </div>



            </section>
        </>
    );
}

export default Banner;