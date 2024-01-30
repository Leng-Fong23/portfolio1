import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="border-2 border-red-500">
    <div>
    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper relative border-[5px] border-red-500"
      >
        
        
        <SwiperSlide className="border-20 border-red-500">
        <img src="/travel (4).jpeg" alt="lengfong" width="300" height="400" className="mx-auto rounded-lg" />
        </SwiperSlide>
        
        
        
        <SwiperSlide> <Image src="/travel (5).jpeg" alt="lengfong" width="300" height="400" className=" mx-auto  rounded-lg" /></SwiperSlide>
        <SwiperSlide> <Image src="/travel (6).jpeg" alt="lengfong" width="300" height="400" className=" mx-auto  rounded-lg" /></SwiperSlide>
        <SwiperSlide> <Image src="/travel (7).jpeg" alt="lengfong" width="300" height="400" className=" mx-auto  rounded-lg" /></SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}
