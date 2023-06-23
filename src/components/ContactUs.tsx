import React from "react";
import { BsTelephone, BsWechat } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="bg-gray-300 min-h-screen w-full h-full">
      <div className="max-w-[1440px] mx-auto w-full mt-[78px] min-h-screen">
        <div className="relative bg-contact-bg-pattern bg-cover h-96 w-full flex items-center justify-center ">
          <div className="!bg-black/10 w-full flex items-center justify-center">
            <div className="absolute top-0 inset-x-0  py-[40px] flex flex-col max-w-full  items-center justify-center ">
              <h1 className="text-center test-white font-[700] text-white text-[30px]">
                Contact Us About UnduguMentorships's Program
              </h1>
              <p className="text-[19px] font-[500px] text-white brightness-150 max-w-xs text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo debitis incidunt, at optio eligendi voluptas
                consequatur quas accusamus.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-50 w-full h-[calc(100vh_-_385px)] items-center justify-start">
          <div className="flex gap-6 w-[65vw] -mt-[50px] z-[999] h-full bg-gray-50 rounded-md p-[20px]">
            <div className="flex flex-col w-96 gap-5 ">
              <div className=" bg-white min-w-64 flex gap-6 items-start px-[30px] py-5 cursor-pointer rounded-md shadow-md  ">
                <span className="h-12 w-12 flex items-center justify-center rounded-full border border-text">
                  <BsTelephone className="h-7 w-7 text-text" />
                </span>
                <div className="flex-1 flex flex-col  items-start">
                  <p className="text-[16px] text-gray-500 leading-4">
                    Call us directly at:
                  </p>
                  <p className="text-[18px] text-[#1ea2a0] mt-1 font-[600]">
                    +254 70399875673
                  </p>
                  <span className="text-sm text-text leading-2 pt-0 mt-0 text-center ml-10 mb-0">
                    Or
                  </span>
                  <p className="text-[18px] text-[#1ea2a0] font-[600]">
                    +254 70399875673
                  </p>
                </div>
              </div>
              <div className=" bg-white min-w-64 flex gap-6 items-start px-[30px] py-8 cursor-pointer rounded-md shadow-md  ">
                <span className="h-12 w-12 flex items-center justify-center rounded-full border border-text">
                  <BsWechat className="h-7 w-7 text-text" />
                </span>
                <div className="flex-1 flex flex-col  items-start mt-2">
                  <p className="text-[16px] text-gray-500 leading-4">
                    Chat with our team lead
                  </p>
                  <button className="mt-3 bg-[#1ea2a0] py-[8px] px-[20px] text-white rounded-md cursor-pointer">
                    Chat with us
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col w-full items-center justify-center bg-white rounded-md shadow-md">
              <div className="flex flex-col w-full items-start justify-start px-40">
                <h2 className="text-center text-[24px] py-1 font-[700px] capitalize text-[#1ea2a0] mx-auto">
                  Send Us A Message
                </h2>
                <div className="flex flex-col">
                  <p className="text-start text-[16px] text-gray-500">
                    We would love to respond to your queries or just hear from
                    you.
                  </p>
                  <p className="text-start text-[16px] text-gray-500">
                    Feel free to get in touch with us.
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-[10px] w-full">
                  <div className="flex flex-col ">
                    <label className="text-[#1ea2a0]">Name</label>
                    <input
                      type="text"
                      className=" mt-1 rounded-md outline-none border border-[#1ea2a0] focus:outline-none focus:border-0 focus:ring-[#1ea2a0]"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="text-[#1ea2a0]">Email</label>
                    <input
                      type="text"
                      className=" mt-1 rounded-md outline-none border border-[#1ea2a0] focus:outline-none focus:border-0 focus:ring-[#1ea2a0]"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="text-[#1ea2a0]">Subject</label>
                    <input
                      type="text"
                      className=" mt-1 rounded-md outline-none border border-[#1ea2a0] focus:outline-none focus:border-0 focus:ring-[#1ea2a0]"
                      placeholder="Enter the subject"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="text-[#1ea2a0]">Message</label>
                    <textarea
                      className=" mt-1 rounded-md outline-none border border-[#1ea2a0] focus:outline-none focus:border-0 focus:ring-[#1ea2a0]"
                      rows={3}
                    ></textarea>
                  </div>

                  <button className="my-1 w-fit bg-[#1ea2a0] py-[8px] px-[36px] text-white rounded-md cursor-pointer">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
