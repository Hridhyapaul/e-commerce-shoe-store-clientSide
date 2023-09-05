import Wrapper from '@/components/Wrapper';
import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';

const ProductDetails = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* <-----Left column start-----> */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:mx-w-full mx-auto lg:mx-0'>
                        <ProductDetailsCarousel></ProductDetailsCarousel>
                    </div>
                    {/* <-----Left column End-----> */}
                </div>
            </Wrapper>
        </div>
    );
};

export default ProductDetails;