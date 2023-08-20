"use client";

import React, { Dispatch, SetStateAction } from "react";
import "./Carousel.css";

type Props = {
  children: React.ReactNode[];
  show: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  handleTouchStart: () => void;
  handleTouchMove: () => void;
};

export const CarouselComponent = ({
  children,
  show,
  currentIndex,
  handleTouchStart,
  handleTouchMove,
}: Props) => {

  return (
    <div className="carousel-container  max-w-[1440px]  mx-auto w-full bg-gray-50 py-3 px-1 ">
      <div className="carousel-wrapper">
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
