import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';



// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <>
    <Swiper 
      pagination={true} 
      modules={[Pagination]} 
      className="min-h-screen ]"
    >
      <SwiperSlide
        className='flex items-center justify-center text-center text-2xl bg-white'
      >
        Slide to the left to view more
        <img className=" w-[20%] h-[20%] object-cover" src="./pinkcake(1).jpeg" alt="Slide Image" />
      </SwiperSlide>
      <SwiperSlide
        className='flex items-center justify-center text-center text-2xl bg-white'
      >
        Slide to the left to view more
        <img className="block w-[60%] h-[60%] object-cover" src="./background.png" alt="Slide Image" />
      </SwiperSlide>
      <SwiperSlide
        className='flex items-center justify-center text-center text-2xl bg-white'
      >
        Slide to the left to view more
        <img className="block w-[60%] h-[60%] object-cover" src="./background.png" alt="Slide Image" />
      </SwiperSlide>
      <SwiperSlide
        className='flex items-center justify-center text-center text-2xl bg-white'
      >
        Slide to the left to view more
        <img className="block w-[60%] h-[60%] object-cover" src="./background.png" alt="Slide Image" />
      </SwiperSlide>
      <SwiperSlide
        className='flex items-center justify-center text-center text-2xl bg-white'
      >
       Slide to the left to view more
        <img className="block w-[60%] h-[60%] object-cover" src="./background.png" alt="Slide Image" />
      </SwiperSlide>
    </Swiper>
  </>
  );
}
