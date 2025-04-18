import React from "react";

import review1 from "../../assets/img/review-1.jpg";
import review2 from "../../assets/img/review-2.jpg";
import review3 from "../../assets/img/review-3.jpg";
import review4 from "../../assets/img/review-4.jpg";

import leaf4 from "../../assets/img/leaf-4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import useScrollReveal from "../../Hooks/useScrollReveal";

function Review() {

  useScrollReveal(".Review___top")
  useScrollReveal(".Review___leaf" , {delay:1000 , origin:"left"})
useScrollReveal(".Review__swiper")
  return (
    <section id="Review" class="relative mb-20 md:mb-28 overflow-hidden">
        <div class="Review___leaf absolute -top-8 -left-12  opacity-50">
            <img src={leaf4} alt="leafImage" class="w-40 md:w-52 xl:w-64"/>
        </div>
      <div className=" Review___top flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title">Customer Review</h2>
        <p className="max-w-2xl">Follow instruction for more</p>
      </div>

      <div className="Review__swiper container">
        <div className="py-12 relative">
          <Swiper
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={400}
            grabCursor={true}
            pagination={{
              clickable: true,
             
            }}
            breakpoints={{
              // On screens 640px and below (mobile), show 1 slide
              640: {
                slidesPerView: 1,
              },
              // On screens 768px and below (tablet), show 2 slides
              768: {
                slidesPerView: 2,
              },
              // On screens 1024px and above (desktop), show 3 slides
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}

            class="pb-3"
          >
            <SwiperSlide>
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                <p className="font-Lobster">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique culpa ut amet voluptas asperiores alias sed
                  consequatur.
                </p>
                <div className="flex items-center">
                  <img
                    src={review1}
                    alt="rev1"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase">John doe</p>
                    <p>Designer</p>
                  </div>
                  <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                <p className="font-Lobster">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique culpa ut amet voluptas asperiores alias sed
                  consequatur.
                </p>
                <div className="flex items-center">
                  <img
                    src={review2}
                    alt="rev2"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase">John doe</p>
                    <p>Designer</p>
                  </div>
                  <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                <p className="font-Lobster">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique culpa ut amet voluptas asperiores alias sed
                  consequatur.
                </p>
                <div className="flex items-center">
                  <img
                    src={review3}
                    alt="rev3"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase">John doe</p>
                    <p>Designer</p>
                  </div>
                  <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                <p className="font-Lobster">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique culpa ut amet voluptas asperiores alias sed
                  consequatur.
                </p>
                <div className="flex items-center">
                  <img
                    src={review4}
                    alt="rev4"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase">John doe</p>
                    <p>Designer</p>
                  </div>
                  <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination mt-6 flex justify-center items-center"></div>
        </div>
      </div>
    </section>
  );
}

export default Review;
