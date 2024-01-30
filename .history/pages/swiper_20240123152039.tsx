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
        className='flex items-center justify-center text-center text-2xl bg-white'>Slide 1
        <img className="block w-full h-full object-cover" src="./background.png" alt="Slide Image" />
        </SwiperSlide>
        <SwiperSlide
        className='flex items-center justify-center text-center text-2xl bg-white'>Slide 2
        <img className="block w-full h-full object-cover" src="./background.png" alt="Slide Image" />
        </SwiperSlide>
        <SwiperSlide
        className='flex items-center justify-center text-center text-2xl bg-white'>Slide 3
        <img className="block w-full h-full object-cover" src="./background.png" alt="Slide Image" />
        </SwiperSlide>
        <SwiperSlide
        className='flex items-center justify-center text-center text-2xl bg-white'>Slide 4
        <img className="block w-full h-full object-cover" src="./background.png" alt="Slide Image" />
        </SwiperSlide>
        <SwiperSlide
        className='flex items-center justify-center text-center text-2xl bg-white'>Slide 5
        <img className="block w-full h-full object-cover" src="./background.png" alt="Slide Image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
