"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { MdMenu } from "react-icons/md";

import logo from "./../../../public/logo-two.jpg";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNavItems, setShowNavItems] = useState(false);

  const [navBg, setNavBg] = useState("bg-transparent");

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavBg("bg-black/70")
      } else {
        setNavBg("bg-transparent")
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  return (
    <nav className={`fixed top-0 z-40 w-full h-auto text-white bg-black/60`}>
      <div className=" flex justify-between items-center px-5 md:px-28 py-[15px]">
        <div className="">
          <Image
            alt="logo"
            src={logo}
            width={50}
            height={50}
            className="!rounded-full !object-cover"
          />
        </div>
        <div className="relative flex items-center md:hidden">
          <span
            onClick={() => setShowSearch(!showSearch)}
            className="bg-white rounded-lg h-[35px]  w-10 flex items-center justify-center cursor-pointer md:hidden"
          >
            <BsSearch className=" text-[1.2rem] text-gray-800" />
          </span>
          {showSearch && (
            <input
              className="absolute md:flex top-10 right-8 sm:right-12 bg-white h-[40px] w-fit  sm:w-[350px] align-middle rounded-lg px-3 text-slate-900 text-[0.9rem]"
              placeholder="Search..."
            />
          )}
        </div>

        <div className="items-center hidden md:flex">
          <input
            className="bg-white h-[40px] md:w-[350px] rounded-l-sm px-3 text-slate-900 text-[0.9rem]"
            placeholder="Search..."
          />
          <span className="bg-[#1ea2a0] h-[40px]  rounded-r-sm w-10 flex items-center justify-center cursor-pointer">
            <BsSearch className=" text-[1.4rem]" />
          </span>
        </div>
      </div>
      <div className="px-5 bg-transparent md:px-28 ">
        <div className="flex items-end justify-end gap-10 md:justify-center">
          <ul className="hidden gap-10 py-2 md:flex">
            <Link
              onClick={() => setShowNavItems(false)}
              href="/"
              className="text-[1.2rem] text-white hover:text-text">
              Home
            </Link>
            <Link
              href="/events"
              onClick={() => setShowNavItems(false)}
              className="text-[1.2rem] text-white hover:text-text"
            >
              Our Events
            </Link>

            <Link
              href="/about"
              onClick={() => setShowNavItems(false)}
              className="text-[1.2rem] text-white hover:text-text"
            >
              About
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setShowNavItems(false)}
              className="text-[1.2rem] text-white hover:text-text"
            >
              Contact Us
            </Link>
          </ul>
          <span
            onClick={() => setShowNavItems(!showNavItems)}
            className="md:hidden">
            <MdMenu className="w-10 h-10 text-lg text-white cursor-pointer" />
          </span>
        </div>
        {
          showNavItems &&
          <ul className="flex flex-col items-center gap-10 py-2">

            <Link
              onClick={() => setShowNavItems(false)}
              href="/"
              className="text-[1.2rem] text-white hover:text-text">
              Home
            </Link>
            <Link
              href="/events"
              onClick={() => setShowNavItems(false)}
              className="text-[1.2rem] text-white hover:text-text"
            >
              Our Events
            </Link>

            <Link
              href="/about"
              onClick={() => setShowNavItems(false)}
              className="text-[1.2rem] text-white hover:text-text"
            >
              About
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setShowNavItems(false)}
              className="text-[1.2rem] text-white hover:text-text"
            >
              Contact Us
            </Link>
          </ul>
        }
      </div>

      <hr className="opacity-40" />
    </nav>
  );
};

export default NavBar;
