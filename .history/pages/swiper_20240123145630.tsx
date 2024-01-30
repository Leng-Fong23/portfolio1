import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <>
     <Swiper
  effect={'cards'}
  grabCursor={true}
  modules={[EffectCards]}
  className="w-[80%] h-[80%] flex justify-center items-center mx-auto"
>
  <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
    <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-40 h-40 object-cover" />
  </SwiperSlide>
  <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
    <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-40 h-40 object-cover" />
  </SwiperSlide>
  <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
    <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-40 h-40 object-cover" />
  </SwiperSlide>
  <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
    <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-40 h-40 object-cover" />
  </SwiperSlide>
  <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
    <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-40 h-40 object-cover" />
  </SwiperSlide>
  <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
    <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-40 h-40 object-cover" />
  </SwiperSlide>
  <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
    <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-40 h-40 object-cover" />
  </SwiperSlide>
</Swiper>

    </>
  );
}
