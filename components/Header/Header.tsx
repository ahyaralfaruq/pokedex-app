"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import test from "@/assets/andro-chrome-d512.png"
import Image from "next/image";
import Search from "./Search";
import dynamic from "next/dynamic";

const Header = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`transition-[background-color_0.3s_ease-in-out] sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary-gua" : "bg-transparent"
      }`}
    >
      <nav className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={test} alt='logo' priority={true} className='md:w-20 md:h-20 w-16 h-16 aspect-square object-contain' />
          <p className='text-white text-[18px] font-bold font-tomorrow cursor-pointer hidden lg:flex '>
            POKEDEX APP &nbsp;
            <span className='sm:block hidden'></span>
          </p>
        </Link>
        
        <Search />

      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false }); // solving hydration conflict
