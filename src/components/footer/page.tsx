import image from "next/image";
import React from "react";
import { SiFacebook } from "react-icons/si";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import Link from "next/link";

function Footer() {
  return (
    <div className=" flex flex-col items-center justify-center w-full">
      <div className="w-full flex items-center justify-center opacity-90 px-5 md:px-0 bg-gradient-to-r from-[#105175] to-[#032030]">
        <div className="py-3 flex flex-col items-center">
          <h2 className="text-white text-[1.5rem]  font-semibold ">
            Nesletter Sign Up
          </h2>
          <p className="text-white text-[0.9rem] md:text-[1.1rem] leading-[1.3rem] py-3 text-center">
            Send me a notification on the upcoming and current events!
          </p>
          <div className="mt-2 flex flex-col items-center gap-3 md:flex-row md:gap-0">
            <input
              className="w-[250px] md:w-[300px] h-[45px] px-3 focus:outline-0"
              placeholder="example@email.com"
            />
            <button className="bg-[#ff6100] hover:bg-[#f3a676] hover:transition-all hover:duration-700 h-[45px] w-fit px-4 py-2 text-white uppercase font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="h-auto bg-blue w-full px-12">
        <div className="flex flex-col md:flex-row gap-3 md:gap-20 items-start justify-center ">
          <div className=" mt-8">
            <div className="mt-2">
              <h2 className="text-white text-[1rem]">
                UnduguMentorshipProgram
              </h2>
              <p className="text-white text-[0.8rem] py-3">
                Follow Us To Learn More
              </p>
              <div className=" flex flex-row gap-4 pb-5 ">
                <Link
                  legacyBehavior
                  href={"https://www.facebook.com/UnduguMentorship"}
                  title="Undugu Mentorship Initiative on Facebook"
                >
                  <SiFacebook className="w-8 h-8 text-white cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Twitter"
                >
                  <BsTwitter className="w-8 h-8 text-white cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Instagram"
                >
                  <BsInstagram className="w-8 h-8 text-white cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-white text-[1rem]  font-semibold ">
              The Organisation
            </h1>
            <ul className="">
              <li className="text-white text-[0.8rem] py-1 cursor-pointer hover:text-text">About</li>
              <li className="text-white text-[0.8rem] py-1 cursor-pointer hover:text-text">Events</li>
              <li className="text-white text-[0.8rem] py-1 cursor-pointer hover:text-text">Contact Us</li>
            </ul>
          </div>
          
        </div>
        <p className="mt-4 py-3 text-white text-[0.7rem] text-center">
          Copyright © 2023 UnduguMentorship, Wundanyi{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
