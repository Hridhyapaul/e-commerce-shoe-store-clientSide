import React from "react";

const ShopBySportCard = ({ product }) => {
  console.log(product);
  const { attributes: p, id } = product;
  return (
    <div className="cursor-pointer">
      <div className="relative">
        <img
          src={p.image.data.attributes.url}
          className="aspect-[16/10] md:aspect-auto md:w-[1200px] md:h-[400px] object-cover"
        />
        <div className="px-[10px] md:px-[20px] py-[10px] md:py-[15px] rounded-r-md font-secondFont font-bold bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-slate-900 text-[10px] md:text-[20px] uppercase cursor-pointer hover:opacity-90">
          Shop now
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-[15px] md:text-[20px] font-semibold">{p.title}</h1>
        <p>{p.subtitle}</p>
      </div>
    </div>
  );
};

export default ShopBySportCard;
