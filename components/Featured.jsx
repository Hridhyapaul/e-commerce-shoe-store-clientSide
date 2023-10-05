import React from "react";

const Featured = () => {
  return (
    <div className="md:mt-[60px] mt-[40px]">
      <div className="mb-10">
        <h1 className="text-[28px] md:text-[34px] font-semibold leading-tight">
          Featured
        </h1>

        <div className="text-md md:text-xl">
          Embark on a Journey of Comfort and Style with Smart's Finest Footwear
        </div>
      </div>

      <div className="md:flex justify-between items-center gap-4 space-y-5 md:space-y-0">
        {/* <------- Start Featured Image 1 -------> */}
        <div className="relative">
          <img
            src="/featured-1.jpg"
            alt=""
            className="h-[600px] w-full object-cover"
          />
          <div className="absolute bottom-[25px] md:bottom-[20px] left-5 space-y-4">
            <p className="text-white/[0.9] text-[15px] md:text-[20px]">
              HBCU Varsity Collection
            </p>
            <div className="px-[14px] md:px-[14px] py-[2px] md:py-[5px] w-fit font-secondFont font-bold bg-white text-black/[0.9] text-[12px] md:text-[16px] rounded-full uppercase cursor-pointer hover:opacity-90">
              Shop
            </div>
          </div>
        </div>
        {/* <------- End Featured Image 1 -------> */}

        {/* <------- Start Featured Image 2 -------> */}
        <div className="relative">
          <img src="/featured-2.jpg" alt="" className="h-[600px] w-full" />

          <div className="absolute bottom-[25px] md:bottom-[20px] left-5 space-y-4">
            <p className="text-white/[0.9] text-[15px] md:text-[20px]">
              Walk the Talk: Smart's Trendsetting Footwear Series
            </p>
            <div className="px-[14px] md:px-[14px] py-[2px] md:py-[5px] w-fit font-secondFont font-bold bg-white text-black/[0.9] text-[12px] md:text-[16px] rounded-full uppercase cursor-pointer hover:opacity-90">
              Shop
            </div>
          </div>
        </div>
        {/* <------- End Featured Image 2 -------> */}

        {/* <------- Start Featured Image 3 -------> */}
        <div className="relative">
          <img src="/featured-3.jpg" alt="" className="h-[600px] w-full" />

          <div className="absolute bottom-[25px] md:bottom-[20px] left-5 space-y-4">
            <p className="text-white/[0.9] text-[15px] md:text-[20px]">
              Step into Greatness: Smarts's Featured Shoe Collection
            </p>
            <div className="px-[14px] md:px-[14px] py-[2px] md:py-[5px] w-fit font-secondFont font-bold bg-white text-black/[0.9] text-[12px] md:text-[16px] rounded-full uppercase cursor-pointer hover:opacity-90">
              Shop
            </div>
          </div>
        </div>
        {/* <------- End Featured Image 3 -------> */}
      </div>
    </div>
  );
};

export default Featured;
