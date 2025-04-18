import React from "react";

import plant1 from "../../assets/img/plant-1.png"
import plant2 from "../../assets/img/plant-2.png"
import leaf from "../../assets/img/leaf-3.png"

import useScrollReveal from "../../Hooks/useScrollReveal";

function AboutUs() {
    useScrollReveal(".About__Page")
    useScrollReveal(".about__leaf" , {delay:1000 , origin:"right"})
    useScrollReveal(".about__item__1_image , .about__item__2_Text " , {origin:"Right"} )
    useScrollReveal(".about__item__2_image , .about__item__1_Text " , {origin:"left"} )
    return (
        <section id="About" class="relative overflow-hidden">

            <div class="about__leaf absolute -top-8 -right-12 opacity-50">
                <img src={leaf} alt="leaf_img" class="w-40 md:w-52 xl:w-64"/>

            </div>

            <div class=" About__Page flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
                <h2 class="title">About Us</h2>
                <p class="max-w-2xl">Follow instruction for more</p>
            </div>

            <div class="container space-y-10 xl:space-y-0">
                {/* item1 */}
                <div class="flex flex-col items-center lg:flex-row gap-5">
                    {/* image1 */}
                    <div class=" about__item__1_image w-full lg:w-1/2">
                        <img src={plant1} alt="Plant_Image" class="w-full sm:w-2/3 lg:w-full xl:w-2/3  mx-auto"></img>
                    </div>

                    <div class=" about__item__1_Text w-full lg:w-1/2">
                        <div class="space-y-5">
                            <h3>
                                Make your <span class="text-yellow-500">Organic</span> <br/>
                                garden
                            </h3>
                            <p class="text-slate-500 font-Lobster">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tellus nec cursus maximus. Nullam consectetur, tortor vitae vulputate congue, nibh tellus ultricies libero, quis posuere massa lorem et leo. Vivamus maximus maximus tincidunt. Duis scelerisque varius orci, quis commodo metus pellentesque a. Fusce eleifend, nulla at pellentesque faucibus, arcu mi ultrices risus, vitae venenatis mauris ligula sed elit. Maecenas molestie, libero eget efficitur feugiat, arcu sem scelerisque leo, ac vehicula mi ex vitae mi. Etiam pretium, elit at porta sollicitudin, diam velit fermentum tellus, at gravida magna enim in dui. Vestibulum eu hendrerit libero, in laoreet nunc. Etiam lobortis lectus ac ante suscipit scelerisque. Nullam ut nunc libero.
                            </p>
                        </div>
                    </div>
                </div>

                {/* item2 */}

                <div class="flex flex-col items-center lg:flex-row-reverse gap-5">
                    {/* image2 */}
                    <div class=" about__item__2_image w-full lg:w-1/2">
                        <img src={plant2} alt="Plant_Image" class="w-full sm:w-2/3 lg:w-full xl:w-2/3  mx-auto"></img>
                    </div>

                    <div class=" about__item__2_Text w-full lg:w-1/2">
                        <div class="space-y-5">
                            <h3>
                                Come with us <span class="text-yellow-500">grow up</span> <br/>
                                your plant
                            </h3>
                            <p class="text-slate-500 font-Lobster">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia tellus nec cursus maximus. Nullam consectetur, tortor vitae vulputate congue, nibh tellus ultricies libero, quis posuere massa lorem et leo. Vivamus maximus maximus tincidunt. Duis scelerisque varius orci, quis commodo metus pellentesque a. Fusce eleifend, nulla at pellentesque faucibus, arcu mi ultrices risus, vitae venenatis mauris ligula sed elit. Maecenas molestie, libero eget efficitur feugiat, arcu sem scelerisque leo, ac vehicula mi ex vitae mi. Etiam pretium, elit at porta sollicitudin, diam velit fermentum tellus, at gravida magna enim in dui. Vestibulum eu hendrerit libero, in laoreet nunc. Etiam lobortis lectus ac ante suscipit scelerisque. Nullam ut nunc libero.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;