import Link from 'next/link';
import React from 'react';

const ProductCard = () => {
    return (
        <Link href="/product/1" className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'>
            <img src="/product-1.webp" alt="Product Image" />
            <div className='p-4 text-black/[0.9] bg-black/[0.3]'>
                <h2 className='text-xl font-medium text-white'>Product Name</h2>
                <div className='flex items-center text-black/[0.5]'>
                    <p className='mr-2 text-lg text-white font-semibold'>$20.00</p>
                    <p className='text-base text-white font-medium line-through'>$25.00</p>
                    <p className='ml-auto text-white text-base font-medium'>20% off</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;