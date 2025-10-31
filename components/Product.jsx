"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
const StarRatings = dynamic(() => import('react-star-ratings'), {
  ssr: false,
});
export default function Product({item}) {
  return (
    <div className="card-wrapper">
      <div className="card-inner">
        <Image
          src={item.imageUrl}
          width="900"
          height="1057"
          alt="Product-1"
        />
      </div>
      <div className="card-content">
        <StarRatings
          rating={4.5}
          starRatedColor="#686464"
          numberOfStars={6}
          starDimension="18px"
          starSpacing="1px"
          name="rating"
        />
        <h5>{item.itemName}</h5>
        <div className="card-price">{item.itemPrice} AZN<span></span></div>
      </div>
    </div>
  );
}
