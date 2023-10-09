import React from "react";

const Trending = () => {
  return (
    <div className="md:mt-[100px] mt-[40px]">
      <div className="mb-10">
        <h1 className="text-[28px] md:text-[34px] font-semibold leading-tight text-slate-900">
          Trending
        </h1>

        <div className="text-md md:text-xl text-slate-900">
          Explore the Unparalleled Comfort of the Hottest Trending Shoes
        </div>
      </div>

      <div className="md:flex justify-between items-center gap-4 space-y-5 md:space-y-0">
        {/* <------- Start trending Image 1 -------> */}
        <div>
          <img
            src="/trending-1.jpg"
            alt=""
            className="h-[400px] w-full object-cover"
          />
          <div className="">
            <p className="text-white/[0.9] text-[15px] md:text-[20px] bg-slate-900 py-5 px-5">
              Smart's Trending Shoes of the Season
            </p>
          </div>
        </div>
        {/* <------- End Featured Image 1 -------> */}

        {/* <------- Start Featured Image 2 -------> */}
        <div>
          <img
            src="/trending-2.jpg"
            alt=""
            className="h-[400px] w-full object-cover"
          />
          <div className="">
            <p className="text-white/[0.9] text-[15px] md:text-[20px] bg-slate-900 py-5 px-5">
              The Coolest Nike Shoes Taking Over Urban Fashion
            </p>
          </div>
        </div>
        {/* <------- End Featured Image 2 -------> */}
      </div>
    </div>
  );
};

export default Trending;
