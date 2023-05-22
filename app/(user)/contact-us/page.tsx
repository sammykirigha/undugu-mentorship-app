import React from "react";
import { MdLocationOn } from "react-icons/md";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className="flex flex-col mt-[125px] max-w-[1400px] mx-auto bg-blue h-auto">
      <div className="w-full grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-4 2xl:flex gap-5 2xl:items-center 2xl:justify-center pt-5 z-10">
        <div className="bg-white flex items-center flex-col justify-center p-5 rounded-sm cursor-pointer h-52 w-52">
          <MdLocationOn className="text-[#89d7e3] text-2xl h-16 w-16" />
          <h2 className="text-black font-bold text-[1rem] py-1">
            Our Main Office
          </h2>
          <p className="text-center text-[0.9rem]">
            Wundanyi Contituency MP's Office; 80304 Wundanyi
          </p>
        </div>
        <div className="bg-white flex items-center flex-col justify-center p-5 rounded-sm cursor-pointer h-52 w-52">
          <MdLocationOn className="text-[#89d7e3] text-2xl h-16 w-16" />
          <h2 className="text-black font-bold text-[1rem] py-1">
            Our Main Office
          </h2>
          <p className="text-center text-[0.9rem]">
            Wundanyi Contituency MP's Office; 80304 Wundanyi
          </p>
        </div>
        <div className="bg-white flex items-center flex-col justify-center p-5 rounded-sm cursor-pointer h-52 w-52">
          <MdLocationOn className="text-[#89d7e3] text-2xl h-16 w-16" />
          <h2 className="text-black font-bold text-[1rem] py-1">
            Our Main Office
          </h2>
          <p className="text-center text-[0.9rem]">
            Wundanyi Contituency MP's Office; 80304 Wundanyi
          </p>
        </div>
        <div className="bg-white flex items-center flex-col justify-center p-5 rounded-sm cursor-pointer h-52 w-52">
          <MdLocationOn className="text-[#89d7e3] text-2xl h-16 w-16" />
          <h2 className="text-black font-bold text-[1rem] py-1">
            Our Main Office
          </h2>
          <p className="text-center text-[0.9rem]">
            Wundanyi Contituency MP's Office; 80304 Wundanyi
          </p>
        </div>
      </div>
      <div className="bg-[#89d7e3] h-[550px] mx-5 2xl:mx-52 -mt-5 flex flex-col justify-center items-center z-0">
        <h1 className="z-0 text-[3.2rem] font-bold">Contact us</h1>
        <div className="flex flex-col gap-5 w-full px-5 lg:px-20">
            <input className="h-[40px] bg-white w-full px-3" placeholder="Enter Your Name"  />
            <input className="h-[40px] bg-white w-full px-3" placeholder="Enter Your Email"  />
             <textarea className=" bg-white w-full px-3" rows={4} placeholder="Eneter Your Message" />
        </div>
        <button className="bg-[#89d7e3] hover:bg-white hover:text-[#89d7e3] py-2 px-5 rounded-sm text-white outline outline-white mt-5">
            Submmit
        </button>
      </div>
    </div>
  );
}

export default Page;
