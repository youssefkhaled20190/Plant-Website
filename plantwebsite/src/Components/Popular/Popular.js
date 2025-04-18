import React from "react";
import Cart1 from "../../assets/img/cart-1.png"
import Cart2 from "../../assets/img/cart-2.png"
import Cart3 from "../../assets/img/cart-3.png"
import Cart4 from "../../assets/img/cart-4.png"

import useScrollReveal from "../../Hooks/useScrollReveal";

function Popular(){

    useScrollReveal(".popular__top")

    useScrollReveal(".popular__card" , {interval:1000})


    return(
        <section id="Popular" class="bg-green-900">

            <div class=" popular__top flex flex-col items-center gap-3 text-center mb-40 md:mb-28 xl:md">
                <h2 class="title">Your Choice Plant</h2>
                <p class="max-w-2xl">Follow instruction for more</p>
            </div>

            <div class="container w-full grid grid-cols-1 gap-x-8 gap-y-36
            md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            ">
                <div class=" popular__card bg-green-950 p-10 pt-24 rounded-md relative">
                    <img src={Cart1} alt="Cart1Image"  class="w-56 absolute -top-5 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 duration-500
                    "/>
                    <p>Nephrolepis exaltata</p>
                    <h3>Boston Fern</h3>
                    <div class="text-yellow-500">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                        <i class="ri-star-line text-gray-400"></i>
                        <i class="ri-star-line text-gray-400"></i>
                    </div>

                    <div class="flex items-center justify-between">
                        <p class="text-xl">5$</p>
                        <button class="bg-yellow-500 px-2 py-1 rounded-sm">
                            <i class="ri-shopping-cart-fill"></i>
                        </button>
                    </div>
                </div>

                <div class=" popular__card bg-green-950 p-10 pt-24 rounded-md relative">
                    <img src={Cart2} alt="Cart1Image"  class="w-56 absolute -top-5 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 duration-500
                    "/>
                    <p>Ficus elastica</p>
                    <h3>Rubber Plant</h3>
                    <div class="text-yellow-500">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                        <i class="ri-star-line text-gray-400"></i>
                        <i class="ri-star-line text-gray-400"></i>
                    </div>

                    <div class="flex items-center justify-between">
                        <p class="text-xl">10$</p>
                        <button class="bg-yellow-500 px-2 py-1 rounded-sm">
                            <i class="ri-shopping-cart-fill"></i>
                        </button>
                    </div>
                </div>


                <div class=" popular__card bg-green-950 p-10 pt-24 rounded-md relative">
                    <img src={Cart3} alt="Cart1Image"  class="w-56 absolute -top-5 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 duration-500
                    "/>
                    <p>Spathiphyllum wallisii</p>
                    <h3>Peace Lily</h3>
                    <div class="text-yellow-500">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                        <i class="ri-star-line text-gray-400"></i>
                        <i class="ri-star-line text-gray-400"></i>
                    </div>

                    <div class="flex items-center justify-between">
                        <p class="text-xl">7$</p>
                        <button class="bg-yellow-500 px-2 py-1 rounded-sm">
                            <i class="ri-shopping-cart-fill"></i>
                        </button>
                    </div>
                </div>


                <div class=" popular__card bg-green-950 p-10 pt-24 rounded-md relative">
                    <img src={Cart4} alt="Cart1Image"  class="w-56 absolute -top-5 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 duration-500
                    "/>
                    <p>Adenium obesum</p>
                    <h3>Desert Rose</h3>
                    <div class="text-yellow-500">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                        <i class="ri-star-line text-gray-400"></i>
                        <i class="ri-star-line text-gray-400"></i>
                    </div>

                    <div class="flex items-center justify-between">
                        <p class="text-xl">9$</p>
                        <button class="bg-yellow-500 px-2 py-1 rounded-sm">
                            <i class="ri-shopping-cart-fill"></i>
                        </button>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Popular;