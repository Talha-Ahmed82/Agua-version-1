import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCube, Autoplay } from "swiper/modules";

export default function HeroSlider() {
  return (
    <>
   
      <Swiper
        effect={"cube"}
        grabCursor={true}
        autoplay={{
          loop: true,
          delay: 3000,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/gold.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/silver.png" />
        </SwiperSlide>
      </Swiper>
  
    </>
  );
}
