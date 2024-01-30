import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-20px h-20px min-h-0"
      >
       <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
        <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-80 h-80 object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
        <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-80 h-80 object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
        <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-80 h-80 object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
        <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-80 h-80 object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
        <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-80 h-80 object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
        <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-80 h-80 object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-18px text-xl font-bold text-white bg-red-700 mx-auto">
        <img src="/pinkcake(1).jpeg" alt="Slide 1" className="w-80 h-80 object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
