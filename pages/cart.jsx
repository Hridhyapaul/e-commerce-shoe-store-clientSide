import CartItem from '@/components/CartItem';
import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Cart = () => {
    return (
        <div>
            <Wrapper>
                <div className='flex flex-col lg:flex-row gap-12 py-10'>
                    {/* Cart Item */}
                    <div className='flex-[2]'>
                        <div className='text-lg font-bold'>Cart Items</div>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                    </div>

                    <div className='flex-[1]'>
                        <div className='text-lg font-bold'>Summary</div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Cart;