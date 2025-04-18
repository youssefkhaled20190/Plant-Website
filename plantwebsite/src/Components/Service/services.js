import React from "react";

import useScrollReveal from "../../Hooks/useScrollReveal";

function Services (){
    useScrollReveal(".Service__Card" , {interval:100})
    return(
        <div class="bg-white text-green-900 py-20">
            <div class="container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="Service__Card border border-green-900 p-5 cursor-pointer rounded-md
                hover:shadow-2xl hover:translate-y-1 duration-300 space-y-5
                ">
                    <div class="flex items-center gap-5">
                    <i class="ri-truck-line text-3xl md:text-4xl xl:text-5xl"></i>
                    <p class="md:text-lg font-bold">Fast <br/>Delivery</p>
                    </div>
                    <p class="font-Lobster">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div class="Service__Card border border-green-900 p-5 cursor-pointer rounded-md
                hover:shadow-2xl hover:translate-y-1 duration-300 space-y-5
                ">
                    <div class="flex items-center gap-5">
                    <i class="ri-customer-service-line text-3xl md:text-4xl xl:text-5xl"></i>
                    <p class="md:text-lg font-bold">Great Customer <br/>Service</p>
                    </div>
                    <p class="font-Lobster">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>


                <div class="Service__Card border border-green-900 p-5 cursor-pointer rounded-md
                hover:shadow-2xl hover:translate-y-1 duration-300 space-y-5
                ">
                    <div class="flex items-center gap-5">
                    <i class="ri-plant-line text-3xl md:text-4xl xl:text-5xl"></i>
                    <p class="md:text-lg font-bold">Original <br/>Plants</p>
                    </div>
                    <p class="font-Lobster">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>


                <div class="Service__Card border border-green-900 p-5 cursor-pointer rounded-md
                hover:shadow-2xl hover:translate-y-1 duration-300 space-y-5
                ">
                    <div class="flex items-center gap-5">
                    <i class="ri-money-dollar-circle-line text-3xl md:text-4xl xl:text-5xl"></i>
                    <p class="md:text-lg font-bold">Affordable <br/>Price</p>
                    </div>
                    <p class="font-Lobster">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;