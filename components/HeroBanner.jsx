import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
    return (
        <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto font-secondFont">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-[42px] md:right-[62px] bottom-2 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black rounded-full z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="text-sm md:text-lg"></BiArrowBack>
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-2 bottom-2 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black rounded-full z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                    </div>
                )}
            >
                <div>
                    <img
                        src="/slide-1.png"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[20px] font-secondFont font-bold bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div>

                <div>
                    <img
                        src="/slide-2.png"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[20px] font-secondFont font-bold bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div>

                <div>
                    <img
                        src="/slide-3.png"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[20px] font-secondFont font-bold bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default HeroBanner;