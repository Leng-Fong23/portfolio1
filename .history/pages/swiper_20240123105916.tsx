// App.tsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/modules';


export default function App() {
  return (
    <>
      <style>
        {`
          #app {
            height: 100%;
          }
          html,
          body {
            position: relative;
            height: 100%;
          }
          
          body {
            background: #eee;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #000;
            margin: 0;
            padding: 0;
          }
          
          .swiper {
            width: 100%;
            height: 100%;
          }
          
          .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
          
            /* Center slide text vertically */
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>

      <Swiper pagination={{ clickable: true }} modules={['Pagination']} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
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
