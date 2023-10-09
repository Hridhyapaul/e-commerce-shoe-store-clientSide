import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const { attributes: p, id } = product;
  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={p.thumbnail.data.attributes.url}
        alt={p.name}
        // className="w-[500px] h-[300px]"
      />
      <div className="p-4 text-black/[0.9] bg-slate-700">
        <h2 className="text-xl font-medium text-white">{p.name}</h2>
        <div className="flex items-center text-black/[0.5] mt-2">
          <p className="mr-2 text-lg text-white font-semibold">${p.price}</p>

          {p.original_price && (
            <>
              <p className="text-base text-white font-medium line-through">
                ${p.original_price}
              </p>
              <p className="ml-auto text-white text-base font-medium">
                {getDiscountedPricePercentage(p.original_price, p.price)}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
