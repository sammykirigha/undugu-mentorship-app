"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdMenu } from "react-icons/md";

import logo from "./../../public/logo-two.jpg";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNavItems, setShowNavItems] = useState(false);
  const [showNavItemsSmallDevice, setShowNavItemsSmallDevice] = useState(false);

  const [navBg, setNavBg] = useState("#1ea2a0");

  useEffect(() => {
    const handleWithScrollForSearchBar = () => {
      if (window !== undefined) {
        if (window.innerWidth > 880) {
          setShowSearch(true);
          setShowNavItemsSmallDevice(false)
        } else {
          setShowSearch(false);
        }
      }

    };

    handleWithScrollForSearchBar();

    window.addEventListener("resize", handleWithScrollForSearchBar);

    return () => {
      window.removeEventListener("resize", handleWithScrollForSearchBar);
    };
  }, []);

  useEffect(() => {
    const handleWithScroll = () => {
      if (window.innerWidth > 760) {
        setShowNavItems(true);
      } else {
        setShowNavItems(false);
      }
    };

    handleWithScroll();

    window.addEventListener("resize", handleWithScroll);

    return () => {
      window.removeEventListener("resize", handleWithScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavBg("#1ea2a0");
      } else {
        setNavBg("#1ea2a0");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 z-[2000] w-full  text-white bg-[${navBg}] `}>
      <div className="flex relative max-w-[1200px] mx-auto w-full  h-[77px] ">
        <div className="flex items-center justify-between w-full px-3">
          <Image
            alt="logo"
            src={logo}
            width={60}
            height={60}
            className="rounded-full"
          />
          {showNavItems && (
            <div className="">
              <ul className="flex items-center gap-10 py-2">
                <Link
                  href="/"
                  className="text-[1.2rem] text-white hover:text-text whitespace-nowrap"
                >
                  Home
                </Link>
                <Link
                  href="/events"
                  className="text-[1.2rem] text-white hover:text-text whitespace-nowrap"
                >
                  Our Events
                </Link>

                <Link
                  href="/about"
                  className="text-[1.2rem] text-white hover:text-text whitespace-nowrap"
                >
                  About
                </Link>
                <Link
                  href="/contact-us"
                  className="text-[1.2rem] text-white hover:text-text whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </ul>
            </div>
          )}

          {showSearch ? (
            <div className="flex items-center">
              <input
                className="bg-white h-[40px] md:w-[350px] rounded-l-md px-3 text-slate-900 text-[0.9rem] outline-none focus:ring-0"
                placeholder="Search..."
              />
              <span className="bg-[#84fffd] h-[40px] rounded-r-md w-10 flex items-center justify-center cursor-pointer">
                <BsSearch className=" text-[1.4rem] text-[#239492] " />
              </span>
            </div>
          ) : (
            <div
              onClick={() => setShowNavItemsSmallDevice(!showNavItemsSmallDevice)}
              className="flex items-end justify-end gap-10 md:justify-center">
              <span className="">
                <MdMenu className="w-10 h-10 text-lg text-white cursor-pointer" />
              </span>
            </div>
          )}
        </div>
      </div>
      <hr className="opacity-70" />

      <div className={`absolute ${showNavItemsSmallDevice ? 'translate-x-7' : "translate-x-64 "} transition duration-700 ease-in-out top-[78px] right-0 w-64  px-6`}>
        <div className=" bg-[#1ea2a0] flex items-center justify-center h-[305px]">
          <ul className="flex flex-col items-start gap-10 py-2">
            <Link
              href="/"
              onClick={() => setShowNavItemsSmallDevice(false)}
              className="text-[1.2rem] text-white hover:text-text whitespace-nowrap w-fit"
            >
              Home
            </Link>
            <Link
              href="/events"
              onClick={() => setShowNavItemsSmallDevice(false)}
              className="text-[1.2rem] text-white hover:text-text whitespace-nowrap"
            >
              Our Events
            </Link>

            <Link
              href="/about"
              onClick={() => setShowNavItemsSmallDevice(false)}
              className="text-[1.2rem] text-white hover:text-text whitespace-nowrap"
            >
              About
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setShowNavItemsSmallDevice(false)}
              className="text-[1.2rem] text-white hover:text-text whitespace-nowrap"
            >
              Contact Us
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

