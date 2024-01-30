import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/Home.module.css";

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
    <>
    <div className=" lg:p-4 bg-[#EEEDEB] w-[20%] rounded-lg mx-40 p-10">
    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper relative"
      >
        
        
        <SwiperSlide >
        <Image src="/travel (4).jpeg" alt="lengfong" width="300" height="10" className=" mx-auto" />
        </SwiperSlide>
        
        
        
        <SwiperSlide> <Image src="/travel (5).jpeg" alt="lengfong" width="300" height="10" className=" mx-auto" /></SwiperSlide>
        <SwiperSlide> <Image src="/travel (6).jpeg" alt="lengfong" width="300" height="10" className=" mx-auto" /></SwiperSlide>
        <SwiperSlide> <Image src="/travel (7).jpeg" alt="lengfong" width="300" height="10" className=" mx-auto" /></SwiperSlide>
      </Swiper>


    </div>
      
    </>
  );
}
