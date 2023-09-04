import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from './MenuMobile';

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
            <Wrapper className="h-[60px] flex justify-between items-center">

                {/* <----- Logo Start -----> */}
                <Link href="/">
                    <img src="/logo.svg" alt="" className='w-[60px] md:w-[100px]' />
                </Link>
                {/* <----- Logo End -----> */}

                {/* <----- Start Large Screen Menu -----> */}
                <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                >
                </Menu>
                {/* <----- End Large Screen Menu -----> */}

                {/* <----- Start Mobile Screen Menu -----> */}
                {mobileMenu && (
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                    >
                    </MenuMobile>
                )}
                {/* <----- End Mobile Screen Menu -----> */}

                {/* <----- Start React & Cart Icon -----> */}
                <div className='flex items-center gap-1 text-black'>
                    {/* Icon Start */}
                    <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
                        <IoMdHeartEmpty className='text-[19px] md:text-[24px]'></IoMdHeartEmpty>
                        <span className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>51</span>
                    </div>
                    {/* Icon End */}

                    {/* Icon Start */}
                    <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
                        <BsCart className='text-[15px] md:text-[20px]'></BsCart>
                        <span className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>5</span>
                    </div>
                    {/* Icon End */}

                    <div className='md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2'>
                        {mobileMenu ? (
                            <VscChromeClose
                                className='text-[16px]'
                                onClick={() => setMobileMenu(false)}
                            ></VscChromeClose>
                        ) : (
                            <BiMenuAltRight
                                className='text-[20px]'
                                onClick={() => setMobileMenu(true)}
                            ></BiMenuAltRight>
                        )}
                    </div>
                </div>
                {/* <----- End React & Cart Icon -----> */}
            </Wrapper>
        </header>
    );
};

export default Header;