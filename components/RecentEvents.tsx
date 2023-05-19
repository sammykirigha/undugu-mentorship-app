import React from "react";
import logo from "./../public/mwangeka_girls_three.jpg";
import Image from "next/image";

interface Props {}

function RecentEvents(props: Props) {
  const {} = props;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="cursor-pointer relative group">
          <Image src={logo} alt="img" />
          <div className="mt-2 pb-4">
            <span className="text-primary text-[1.2rem]">
              Mentoring At Mwangeka Girls High School Wundanyi.
            </span>
          </div>
          <div className="absolute hidden group-hover:block inset-x-0 transition-all duration-700 bg-blue-600 bottom-0 h-[2px]"></div>
        </div>
        <div className="cursor-pointer relative group">
          <Image src={logo} alt="img" />
          <div className="mt-2 pb-4">
            <span className="text-primary text-[1.2rem]">
              Mentoring At Mwangeka Girls High School Wundanyi.
            </span>
          </div>
          <div className="absolute hidden group-hover:block inset-x-0 transition-all duration-700 bg-blue-600 bottom-0 h-[2px]"></div>
        </div>
        <div className="cursor-pointer relative group">
          <Image src={logo} alt="img" />
          <div className="mt-2 pb-4">
            <span className="text-primary text-[1.2rem]">
              Mentoring At Mwangeka Girls High School Wundanyi.
            </span>
          </div>
          <div className="absolute hidden group-hover:block inset-x-0 transition-all duration-700 bg-blue-600 bottom-0 h-[2px]"></div>
        </div>
        <div className="cursor-pointer relative group">
          <Image src={logo} alt="img" />
          <div className="mt-2 pb-4">
            <span className="text-primary text-[1.2rem]">
              Mentoring At Mwangeka Girls High School Wundanyi.
            </span>
          </div>
          <div className="absolute hidden group-hover:block inset-x-0 transition-all duration-700 bg-blue-600 bottom-0 h-[2px]"></div>
        </div>
        
      </div>
    </>
  );
}

export default RecentEvents;
