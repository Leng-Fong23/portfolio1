import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

// Import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-full pt-12 pb-12" // Add Tailwind CSS classes here
      >
        <SwiperSlide className="bg-center bg-cover w-300 h-300">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-300 h-300">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-300 h-300">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-300 h-300">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-300 h-300">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-300 h-300">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-300 h-300">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-300 h-300">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-300 h-300">
          <img className="block w-30 mx-auto" src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Nature 9" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
