"use client";

import "./carousel/Carousel.css";
import React, { useEffect, useState } from "react";
import { Testmony } from "./Testmony";
import { CarouselComponent } from "./carousel/Carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

  console.log("<<<>>>", currentIndex);

  useEffect(() => {
    setLength([1, 2, 3, 4, 5, 6, 7, 8].length);
  }, []);

  return (
    <div className=" bg-white w-full shadow-md">
      <div className="flex flex-col bg-white items-center justify-center mt-8 px-10 w-full max-w-[1440px] mx-auto">
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
            show={3}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
              return <Testmony />;
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
        <div className="my-5 bg-gray-100 ">
          <button className=" button-2 py-2 text-white px-7 w-fit text-[14px] rounded-sm ">
            Read More Testimonials
          </button>
        </div>
      </div>
    </div>
  );
};
