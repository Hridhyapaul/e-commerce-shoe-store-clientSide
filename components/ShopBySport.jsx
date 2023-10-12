import React, { useState } from "react";
import ShopBySportCard from "./ShopBySportCard";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const ShopBySport = ({ shopByProducts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow></PrevArrow>,
    nextArrow: <NextArrow></NextArrow>,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="relative mt-[100px]">
      <div className="mb-5">
        <div className="text-2xl font-bold">Shop by Sport</div>
        <div className="text-md md:text-xl text-slate-900">
          Elevate Your Game with Premium Athletic Footwear
        </div>
      </div>
      <div className="">
        <Slider {...settings}>
          {shopByProducts.data.map((product) => (
            <ShopBySportCard
              key={product.id}
              product={product}
            ></ShopBySportCard>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShopBySport;
