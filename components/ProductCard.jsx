import { getDiscountedPricePercentage } from "@/utils/helper";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  const { attributes: p, id } = product;
  return (
    <Link
      href="/product/1"
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <img src="/product-1.webp" alt="Product Image" />
      <div className="p-4 text-black/[0.9] bg-black/[0.3]">
        <h2 className="text-xl font-medium text-white">{}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg text-white font-semibold">${}</p>

          {p.original_price && (
            <>
              <p className="text-base text-white font-medium line-through">
                ${}
              </p>
              <p className="ml-auto text-white text-base font-medium">
                {getDiscountedPricePercentage(
                    p.original_price,
                    p.price
                )}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
