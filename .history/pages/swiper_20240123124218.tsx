import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

// Install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const YourComponent = () => {
  return (
    <>
      <div className="flex items-center relative min-h-screen bg-gray-200 font-sans text-base text-black m-0 p-0">
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
          className="w-full pt-16 pb-16"
        >
          <SwiperSlide className="bg-center bg-cover w-300 h-300">
            <img className="block w-64 h-64" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
          </SwiperSlide>
          {/* Add other SwiperSlides with similar structure */}
        </Swiper>
      </div>
    </>
  );
};

export default YourComponent;
