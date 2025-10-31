"use client";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image
            src="/img/slider1.jpg"
            alt="slider1"
            height={1015}
            width={1920}
          />
          <div className="container slider-text">
            <h6>Lorem ipsum</h6>
            <h4>
              Tasty Bites <br />
              Healthy Foods
            </h4>
            <p>10 - 50% OFF</p>
            <a href="" className="slider-button">
              Detail
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/slider2.jpg"
            alt="slider2"
            height={1015}
            width={1920}
          />
          <div className="container slider-text">
            <h6>Lorem ipsum</h6>
            <h4>
              Tasty Bites <br />
              Healthy Foods
            </h4>
            <p>10 - 50% OFF</p>
            <a href="" className="slider-button">
              Detail
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/img/slider3.jpg"
            alt="slider3"
            height={1015}
            width={1920}
          />
          <div className="container slider-text">
            <h6>Lorem ipsum</h6>
            <h4>
              Tasty Bites <br />
              Healthy Foods
            </h4>
            <p>10 - 50% OFF</p>
            <a href="" className="slider-button">
              Detail
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
