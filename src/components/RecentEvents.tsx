import React from "react";
import image1 from "./../../public/mwangeka_girls_three.jpg";
import image2 from "./../../public/Mentors_two.jpg";
import image3 from "./../../public/Mentors_one.jpg";
import image4 from "./../../public/Mentors_two.jpg";
import Image from "next/image";

interface Props {}

function RecentEvents(props: Props) {
  const {} = props;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="cursor-pointer relative group">
          <Image src={image1} alt="img" />
          <div className="mt-2 pb-4">
            <span className="text-primary text-[1.2rem] font-[600]">
              Mentoring At Mwangeka Girls High School Wundanyi.
            </span>
          </div>
          <div className="absolute hidden group-hover:block inset-x-0 transition-all duration-700  bg-blue bottom-0 h-[2px]"></div>
        </div>
        <div className="cursor-pointer relative group">
          <Image src={image2} alt="img" />
          <div className="mt-2 pb-4">
            <span className="text-primary text-[1.2rem] font-[600]">
              Mentoring At Mwangeka Girls High School Wundanyi.
            </span>
          </div>
          <div className="absolute hidden group-hover:block inset-x-0 transition-all duration-700 bg-blue bottom-0 h-[2px]"></div>
        </div>
        <div className="cursor-pointer relative group">
          <Image src={image3} alt="img" />
          <div className="mt-2 pb-4">
            <span className="text-primary text-[1.2rem] font-[600]">
              Mentoring At Mwangeka Girls High School Wundanyi.
            </span>
          </div>
          <div className="absolute hidden group-hover:block inset-x-0  ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
        </div>
        <div className="cursor-pointer relative group">
          <Image src={image4} alt="img" />
          <div className="mt-2 pb-4">
            <span className="text-primary text-[1.2rem] font-[600]">
              Mentoring At Mwangeka Girls High School Wundanyi.
            </span>
          </div>
          <div className="absolute hidden group-hover:block inset-x-0 ease-out  duration-1000 bg-blue bottom-0 h-[2px]"></div>
        </div>
        
      </div>
    </>
  );
}

export default RecentEvents;
