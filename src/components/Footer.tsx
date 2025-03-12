import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLocationArrow, FaMailBulk, FaMapPin, FaPhone, FaSearchLocation, FaTwitter } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";


const Footer = () => {
  return (
    <div className="w-full bg-[#063565] pt-5 pb-7">
      <div className="w-full  max-w-[1200px] mx-auto mt-3 flex flex-col md:flex-row items-start px-[20px] lg:items-start gap-[10px] justify-between  lg:gap-[100px]">
        <div className=" flex flex-col">
          <Link href={"/"} className="mt-1 cursor-pointer">
            <Image
              src={"/undugu-logo-2.jpg"}
              alt="logo" width={150} height={35} className="rounded-[3px]"
              priority
            />
          </Link>
          <div className="mt-5 flex items-center gap-3">
            <Link href={"https://www.facebook.com/UnduguMentorship"} target='_blank' className="cursor-pointer">
              <FaFacebook className="text-lg text-[#ffa500] " />
            </Link>
            <Link href={"https://x.com/undugumentors"} target='_blank' className="cursor-pointer">
              <FaTwitter className="text-lg text-[#ffa500] " />
            </Link>
          </div>

        </div>
        <div className="mt-0 w-full md:w-auto flex items-start justify-between gap-auto md:gap-[50px] flex-col md:flex-row">
          <div className="flex flex-col">
            <h2 className="text-white text-[18px]">Useful Links</h2>
            <ul className="flex flex-col mt-3 gap-2">
              <li className="text-[13px] leading-5 cursor-pointer text-gray-400 hover:text-[#ffa500] ">
                <Link href="/contact-us" >
                  Become a Volunteer
                </Link>
              </li>
              <li className="text-[13px] leading-5 cursor-pointer text-gray-400 hover:text-[#ffa500] ">
                <Link href="/contact-us" >
                  Donate
                </Link>
              </li>
              <li className="text-[13px] leading-5 cursor-pointer text-gray-400 hover:text-[#ffa500] ">
                <Link href={"/about-us"} >About Us</Link>
              </li>
              <li className="text-[13px] leading-5 cursor-pointer text-gray-400 hover:text-[#ffa500] ">
                <Link href={"/events"} >Events</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white font-[500] text-[18px]">Contact Us</h2>
            <ul className="flex flex-col mt-3 gap-4">
              <li className="text-[13px] flex items-center text-gray-400 hover:text-[#ffa500] justify-start gap-4 leading-5 cursor-pointer">
                <FaPhone className="text-[#ffa500] text-lg" />
                <Link href={`tel:+254 70399875673`} className="" >
                  +254 70399875673
                </Link>
              </li>
              <li className="text-[13px] flex items-center text-gray-400 hover:text-[#ffa500] justify-start gap-4 leading-5 cursor-pointer">
                <FaMailBulk className="text-[#ffa500] text-lg" />
                <Link href={`mailto:info@undugumentorship.org`} >
                  info@undugumentorship.org
                </Link>
              </li>
              <li className="text-white text-[13px] flex gap-4 leading-5 cursor-pointer hover:text-[#05b4f9] ">
                <MdLocationOn className="text-[#ffa500] text-lg" />
                <div className="flex flex-col max-w-[250px]">
                  <p className="text-gray-400 text-[13px] ">
                    Room No. 06, Block - C, 1st Floor, City Grocer Building, Opposite Blue Room Rest, Off Digo Road, Mombasa CBD, Haile Selasie Rd, Mombasa
                  </p>
                  <p className="text-gray-400 text-[13px] mt-2">
                    <strong className="text-white">Tel:</strong> <a href={`tel: +254 70399875673`}>+254 70399875673</a>
                  </p>
                  <p className="text-gray-400 text-[13px]">
                    <strong className="text-white">Email:</strong> <a href={`mailto:info@undugumentorship.org`}>info@undugumentorship.org</a>
                  </p>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[5px] md:gap-[30px] mt-5">
        <p className="text-[11px] md:text-[13px] leading-5 cursor-pointer text-[#ffa500]  ">Copyright © 2023 UnduguMentorship, Wundanyi</p>
      </div>

    </div>
  );
};

export default Footer;