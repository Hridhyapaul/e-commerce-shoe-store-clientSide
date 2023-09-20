import Wrapper from '@/components/Wrapper';
import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import { fetchDataFromApi } from '@/utils/api';

const ProductDetails = ({ product, products }) => {
    console.log(product, products)
    const p = product?.data?.[0]?.attributes;
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* <-----Left column start-----> */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:mx-w-full mx-auto lg:mx-0'>
                        <ProductDetailsCarousel images={p.image.data}></ProductDetailsCarousel>
                    </div>
                    {/* <-----Left column End-----> */}

                    {/* <-----Right column start-----> */}
                    <div className='flex-[1] py-3'>
                        {/* product title */}
                        <div className='text-[34px] font-semibold mb-2'>
                            Jordan Retro 6 G
                        </div>

                        {/* Product subtitle */}
                        <div className='text-lg font-semibold mb-5'>
                            Men&apos;s Golf Shoes
                        </div>

                        {/* Product Price */}
                        <div className='text-lg font-semibold'>
                            MRP : $149.99
                        </div>
                        <div className='text-md font-medium text-black/[0.5]'>
                            incl. of taxes
                        </div>
                        <div className='text-md font-medium text-black/[0.5] mb-20'>
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* Product size range start */}
                        <div className='mb-10'>
                            {/* Heading Start */}
                            <div className='flex justify-between mb-2'>
                                <div className='text-md font-semibold'>
                                    Select Size
                                </div>
                                <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                                    Select Guide
                                </div>
                            </div>
                            {/* Heading End */}

                            {/* Size Start */}
                            <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 7
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 7.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 8
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 8.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 9
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 9.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 10
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 10.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 11
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 11.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 12
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 12.5
                                </div>
                            </div>
                            {/* Size End */}

                            {/* Show Error Start */}
                            <div className='text-red-600 mt-1'>
                                Size selection is required
                            </div>
                            {/* Show Error End */}
                        </div>
                        {/* Product size range end */}

                        {/* Add to cart button start */}
                        <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                            Add to Cart
                        </button>
                        {/* Add to cart button end */}

                        {/* Whishlist button start */}
                        <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>
                            Whishlist
                            <IoMdHeartEmpty size={20}></IoMdHeartEmpty>
                        </button>
                        {/* Whishlist button end */}

                        <div>
                            <div className='text-lg font-bold mb-5'>
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                Elevate your golf game with the iconic style and premium performance of the Jordan Retro 6 G Men's Golf Shoes. Inspired by the classic Air Jordan 6 basketball shoe, this golf-specific version combines legendary design with cutting-edge golf technology.The Retro 6 G features the unmistakable design elements of the Air Jordan 6, including the distinctive lace toggle and sleek, high-top silhouette. It's a true fusion of basketball heritage and golf innovation.
                            </div>
                        </div>
                    </div>
                    {/* <-----Right column end-----> */}
                </div>

                {/* <div>
                    <RelatedProducts></RelatedProducts>
                </div> */}
            </Wrapper>
        </div>
    );
};

export default ProductDetails;

export async function getStaticPaths() {
    const products = await fetchDataFromApi("/api/products?populate=*");
    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][slug][$ne]=${slug}`
    );

    return {
        props: {
            product,
            products,
        },
    };
}