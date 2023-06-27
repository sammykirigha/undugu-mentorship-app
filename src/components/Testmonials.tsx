
import React from "react";
import { Testmony } from "./Testmony";

export const Testmonials = () => {
  return (
    <div className=" bg-white w-full">
      <div className="flex flex-col bg-white items-center justify-center mt-8 px-10 w-full max-w-[1440px] mx-auto">
        <h1 className="text-[1.6rem] font-[700] text-slate-600 text-center">
          Over 100 students have benefited from this program
        </h1>
        <p className="text-[1.2rem] text-slate-500 leading-[1rem] mt-2 text-center ">
          Here are some of their success stories
        </p>
        <div className="mt-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center place-items-center  w-full">
            {[1,2,3].map((item) => {
                return (
                    <Testmony />
                )
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto">
        <div className="flex gap-5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-primary cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-primary cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
        <div className="my-10 bg-gray-100 transform hover:-translate-y-0.5 transition duration-300">
          <button className=" py-2 px-7 w-fit rounded-md shadow-md  ">
            Read More Testimonials
          </button>
        </div>
      </div>
    </div>
  );
};
