// App.tsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';


export default function App() {
  return (
    <>

      
      <Swiper 
      pagination={true} 
      modules={[Pagination]} 
      className="h-screen">
        <SwiperSlide
        className='flex items-center justify-center text-center text-2xl bg-white'>Slide 1</SwiperSlide>
        <img className="block w-full h-full object-cover" src="./background.png" alt="Slide Image" />
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
