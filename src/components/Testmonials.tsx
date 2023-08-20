"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Testimony } from "./Testmony";
import { CarouselComponent } from "./carousel/Carousel";
import "./carousel/Carousel.css";

export const Testmonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState([1, 2, 3, 4, 5, 6, 7, 8].length);
  const [show, setShow] = useState(3);
  const [touchPosition, setTouchPosition] = useState<
    React.TouchEvent<HTMLDivElement>
  >(null!);

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState: number) => prevState - 1);
    }
  };

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown: any = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown: any = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null!);
  };



  useEffect(() => {
    setLength([1, 2, 3, 4, 5, 6, 7, 8].length);
  }, []);

  useEffect(() => {
    const checkWidthSize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 866) {
          setShow(3);
        } else if (window.innerWidth > 600) {
          setShow(2);
        } else {
          setShow(1);
        }
      }
    };

    checkWidthSize();

    window.addEventListener("resize", checkWidthSize);
    return () => {
      window.removeEventListener("resize", checkWidthSize);
    };
  }, []);

  console.log("<<<>>>", show);


  return (
    <div className=" bg-white w-full shadow-md">
      <div className="flex flex-col bg-white items-center justify-center mt-8 px-2 md:px-10 w-full max-w-[1440px] mx-auto">
        <h1 className="text-[1.6rem] font-[700] text-slate-600 text-center">
          Over 100 students have benefited from this program
        </h1>
        <p className="text-[1.2rem] text-slate-500 leading-[1rem] mt-2 text-center ">
          Here are some of their success stories
        </p>
        <div className="py-10 w-full h-full ">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center place-items-center  w-full"> */}
          <CarouselComponent
            handleTouchMove={() => handleTouchMove}
            handleTouchStart={() => handleTouchStart}
            show={show}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          >
            {[1, 2, 3, 4].map((item, index) => {
              return <Testimony key={index} />;
            })}
          </CarouselComponent>
          {/* </div> */}
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto">
        <div className="flex gap-5">
          {currentIndex > 0 && (
            <button
              onClick={prev}
              className="left-arrow flex items-center justify-center !bg-[#1ea2a0] cursor-pointer"
            >
              <FaArrowLeft className="text-white" />
            </button>
          )}
          {currentIndex < length - show && (
            <button
              onClick={next}
              className="right-arrow flex items-center justify-center !bg-[#1ea2a0] cursor-pointer"
            >
              <FaArrowRight className="text-white" />
            </button>
          )}
        </div>
        <div className="my-5 bg-white ">
          <Link href="/testmonials" className=" button-2 py-2 text-white px-7 w-fit text-[14px] rounded-sm ">
            Read More Testimonials
          </Link>
        </div>
      </div>
    </div>
  );
};
