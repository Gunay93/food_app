"use client";
import Product from "./Product";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetProductsQuery } from "@/services/productsApi";
export default function Products() {
  const { data, isLoading, error } = useGetProductsQuery();
  console.log(data);

  return (
    <section id="products">
      <div className="container">
        <div className="title-wrapper">
          <h2>Our Products</h2>
          <p>
            Quam pellentesque nec nam aliquam sem et tortor consequat. Ut
            placerat orci nulla pellentesque dignissim enim sit amet venenatis.
          </p>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Navigation, Autoplay]}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.itemID}>
              <Product item={item}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
