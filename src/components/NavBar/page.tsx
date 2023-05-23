"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { MdMenu } from "react-icons/md";

import logo from "./../../../public/logo-two.jpg";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNavItems, setShowNavItems] = useState(false);
  return (
    <nav className=" w-full top-0 bg-blue h-auto text-white  fixed z-40 ">
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

        <div className="hidden md:flex items-center">
          <input
            className="bg-white h-[40px] md:w-[350px] rounded-l-sm px-3 text-slate-900 text-[0.9rem]"
            placeholder="Search..."
          />
          <span className="bg-[#1ea2a0] h-[40px]  rounded-r-sm w-10 flex items-center justify-center cursor-pointer">
            <BsSearch className=" text-[1.4rem]" />
          </span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#185779] to-[#10425e]  px-5 md:px-28 ">
        <div className="flex gap-10 items-end justify-end md:justify-center">
          <ul className="hidden md:flex gap-10 py-2">
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
            <MdMenu className="text-white text-lg h-10 w-10 cursor-pointer" />
          </span>
        </div>
        {
            showNavItems && 
        <ul className="flex flex-col gap-10 py-2 items-center">
          
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
    </nav>
  );
};

export default NavBar;
