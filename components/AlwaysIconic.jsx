import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AlwaysIconicCard from "./AlwaysIconicCard";

const AlwaysIconic = ({ iconicProducts }) => {
  console.log(iconicProducts);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-[150px]">
      <div className="mb-5">
        <div className="text-2xl font-bold">Always Iconic</div>
        <div className="text-md md:text-xl text-slate-900">
          Discover Iconic Footwear Styles Crafted for Every Journey and
          Fashioned
        </div>
      </div>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        {iconicProducts?.data?.length > 0 ? (
          iconicProducts.data.map((product) => (
            <AlwaysIconicCard key={product?.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </Carousel>
    </div>
  );
};

export default AlwaysIconic;
