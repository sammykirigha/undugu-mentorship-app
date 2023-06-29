import Image from "next/image";
import React from "react";
import image from "../../../../public/Mentors_two.jpg";
import image2 from "../../../../public/Mentors_one.jpg";
import image3 from "../../../../public/Mwangeka_girls.jpg";
import image4 from "../../../../public/mwangeka_girls_three.jpg";
import image8 from "../../../../public/home-page-photo.jpg";
import imagetwo from "../../../../public/image-2.jpg";
import imagethree from "../../../../public/image-3.jpg";
import Link from "next/link";
import { SiFacebook } from "react-icons/si";
import { BsTwitter, BsInstagram } from "react-icons/bs";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className="mt-[50px] md:mt-[80px] xl:mt-[125px] flex flex-col xl:flex-row gap-10 w-full max-w-[1280px] mx-auto pt-5 pb-12 px-[20px] xl:px-0  ">
      {/* left */}
      <div className="mt-4">
        <h1
          className="text-primary whitespace-nowrap text-[1.3rem] font-[700] opacity-90 flex 
              items-center gap-3 before:content-[''] before:h-1 before:w-full 
              before:bg-primary before:block after:content-[''] 
              after:h-1 after:w-full after:bg-primary after:block"
        >
          UpComing Events
        </h1>
        <div className="bg-white w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex xl:flex-col  gap-6 py-5 ">
          <div className="flex flex-col  gap-3 rounded-md relative group pb-3 cursor-pointer shadow-sm ">
            <Image
              src={image8}
              alt=""
              className="rounded-sm w-full h-[150px] object-cover relative"
            />
            <div className="absolute bottom-14 p-2 left-0 right-0 text-left transition-all ease-in-out duration-200 bg-gradient-to-t from-primary">
              <p className="text-white text-[0.8rem] leading-[0.9rem] tracking-normal font-[600]">
                A Mentoring session with students at Mwangeka Girls Wundanyi.
              </p>
            </div>
            <div className=" flex gap-5 items-end ">
              <div className="flex flex-col gap-2">
                <span className="text-primary text-[0.8rem] leading-[0.9rem]">
                  <strong>Venue:</strong> Taru Boys Voi
                </span>
                <span className="text-primary text-[0.8rem] leading-[0.9rem]">
                  <strong>Date:</strong> May 20
                </span>
              </div>
              <div className=" flex flex-row gap-4 ">
                <Link
                  legacyBehavior
                  href={"https://www.facebook.com/UnduguMentorship"}
                  title="Undugu Mentorship Initiative on Facebook"
                >
                  <SiFacebook className="w-4 h-4 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Twitter"
                >
                  <BsTwitter className="w-4 h-4 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
              </div>
            </div>
            <div className="absolute hidden  group-hover:block inset-x-0 ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
          </div>
          <div className="flex flex-col  gap-3 rounded-md relative group pb-3 cursor-pointer shadow-sm">
            <Image
              src={image2}
              alt=""
              height={150}
              className="rounded-sm w-full h-[150px] object-cover relative"
            />
            <div className="absolute bottom-14 left-0 right-0 p-2 text-left transition-all ease-in-out duration-200 bg-gradient-to-t from-primary">
              <p className="text-white text-[0.8rem] leading-[0.9rem] tracking-normal font-[600]">
                A Mentoring session with students at Mwangeka Girls Wundanyi.
              </p>
            </div>
            <div className=" flex gap-5 items-end ">
              <div className="flex flex-col gap-2">
                <span className="text-primary text-[0.8rem] leading-[0.9rem]">
                  <strong>Venue:</strong> Taru Boys Voi
                </span>
                <span className="text-primary text-[0.8rem] leading-[0.9rem]">
                  <strong>Date:</strong> May 20
                </span>
              </div>
              <div className=" flex flex-row gap-4 ">
                <Link
                  legacyBehavior
                  href={"https://www.facebook.com/UnduguMentorship"}
                  title="Undugu Mentorship Initiative on Facebook"
                >
                  <SiFacebook className="w-4 h-4 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Twitter"
                >
                  <BsTwitter className="w-4 h-4 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
              </div>
            </div>
            <div className="absolute hidden  group-hover:block inset-x-0 ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
          </div>
          <div className="flex flex-col  gap-3 rounded-md relative group pb-3 cursor-pointer shadow-sm">
            <Image
              src={image4}
              alt=""
              height={150}
              className="rounded-sm w-full h-[150px] object-cover relative"
            />
            <div className="absolute bottom-14 left-0 right-0 p-2 text-left transition-all ease-in-out duration-200 bg-gradient-to-t from-primary">
              <p className="text-white text-[0.8rem] leading-[0.9rem] tracking-normal font-[600]">
                A Mentoring session with students at Mwangeka Girls Wundanyi.
              </p>
            </div>
            <div className=" flex gap-5 items-end ">
              <div className="flex flex-col gap-2">
                <span className="text-primary text-[0.8rem] leading-[0.9rem]">
                  <strong>Venue:</strong> Taru Boys Voi
                </span>
                <span className="text-primary text-[0.8rem] leading-[0.9rem]">
                  <strong>Date:</strong> May 20
                </span>
              </div>
              <div className=" flex flex-row gap-4 ">
                <Link
                  legacyBehavior
                  href={"https://www.facebook.com/UnduguMentorship"}
                  title="Undugu Mentorship Initiative on Facebook"
                >
                  <SiFacebook className="w-4 h-4 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Twitter"
                >
                  <BsTwitter className="w-4 h-4 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
              </div>
            </div>
            <div className="absolute hidden  group-hover:block inset-x-0 ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
          </div>
        </div>
      </div>

      {/* center */}
      <div className="flex flex-col">
        {/* <h1
          className="text-primary whitespace-nowrap text-[1.3rem] font-[700] opacity-90
              text-center"
        >
          OnGoing Events
        </h1> */}
        <div className="flex flex-col gap-10 pt-3">
          <div className="flex flex-col relative cursor-pointer">
            <Image
              src={imagetwo}
              alt=""
              height={350}
              width={600}
              className="object-cover sm:w-full xl:w-[600px] "
              sizes="100vw"
            />
            <div className="flex flex-col absolute bottom-0 left-0 right-0 p-4 text-left transition-all ease-in-out duration-200 bg-gradient-to-t from-primary">
              <p className="text-white text-[1rem] leading-[1.1rem] font-[700]">
                Our Next UpComing Event is at Taru Boys Voi
              </p>
            </div>
          </div>

          <div className="flex flex-col relative cursor-pointer">
            <Image
              src={image4}
              alt=""
              height={350}
              width={600}
              className="object-cover sm:w-full xl:w-[600px] "
            />
            <div className="flex flex-col absolute bottom-0 left-0 right-0 p-4 text-left transition-all ease-in-out duration-200 bg-gradient-to-t from-primary">
              <p className="text-white text-[1rem] leading-[1.1rem] font-[700]">
                Our Next UpComing Event is at Taru Boys Voi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col mt-4  ">
        <h1
          className="text-primary whitespace-nowrap text-[1.3rem] font-[700] opacity-90 flex 
              items-center gap-3 before:content-[''] before:h-1 before:w-full 
              before:bg-primary before:block after:content-[''] 
              after:h-1 after:w-full after:bg-primary after:block"
        >
          Past Events
        </h1>
        <p className="text-[1.0rem] text-primary leading-[1.2rem] tracking-wide my-3 font-semibold">
          See Our Past Mentoring Events In Different Schools
        </p>
        <div className=" w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  xl:flex xl:flex-col gap-6 py-5 ">
          <div className="flex items-center  gap-3 relative group pb-3 cursor-pointer shadow-sm">
            <Image
              src={image3}
              alt=""
              height={150}
              width={200}
              className="rounded-sm w-[170px] h-[100px] sm:w-[200px] sm:h-[100px]  object-cover"
            />
            <div className="mt-3 flex flex-col items-start justify-between  gap-3 w-52">
              <p className="text-primary text-[0.8rem] leading-[0.9rem] tracking-normal font-[500]">
                A Mentoring session with students from Mwangeka Girls Wundanyi.
              </p>
              <div className=" flex flex-row gap-4 ">
                <Link
                  legacyBehavior
                  href={"https://www.facebook.com/UnduguMentorship"}
                  title="Undugu Mentorship Initiative on Facebook"
                >
                  <SiFacebook className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Twitter"
                >
                  <BsTwitter className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Instagram"
                >
                  <BsInstagram className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
              </div>
            </div>
            <div className="absolute hidden  group-hover:block inset-x-0 ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
          </div>
          <div className="flex items-center  gap-3 relative group pb-3 cursor-pointer shadow-sm">
            <Image
              src={image2}
              alt=""
              height={150}
              width={200}
              className="rounded-sm w-[170px] h-[100px] sm:w-[200px] sm:h-[100px] object-cover"
            />
            <div className="mt-3 flex flex-col items-start justify-between  gap-3 w-52">
              <p className="text-primary text-[0.8rem] leading-[0.9rem] tracking-normal font-[500]">
                A Mentoring session with students from Mwangeka Girls Wundanyi.
              </p>
              <div className=" flex flex-row gap-4 ">
                <Link
                  legacyBehavior
                  href={"https://www.facebook.com/UnduguMentorship"}
                  title="Undugu Mentorship Initiative on Facebook"
                >
                  <SiFacebook className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Twitter"
                >
                  <BsTwitter className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Instagram"
                >
                  <BsInstagram className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
              </div>
            </div>
            <div className="absolute hidden  group-hover:block inset-x-0 ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
          </div>
          <div className="flex items-center  gap-3 relative group pb-3 cursor-pointer shadow-sm">
            <Image
              src={image}
              alt=""
              height={150}
              width={200}
              className="rounded-sm w-[170px] h-[100px] sm:w-[200px] sm:h-[100px] object-cover"
            />
            <div className="mt-3 flex flex-col items-start justify-between  gap-3 w-52">
              <p className="text-primary text-[0.8rem] leading-[0.9rem] tracking-normal font-[500]">
                A Mentoring session with students from Mwangeka Girls Wundanyi.
              </p>
              <div className=" flex flex-row gap-4 ">
                <Link
                  legacyBehavior
                  href={"https://www.facebook.com/UnduguMentorship"}
                  title="Undugu Mentorship Initiative on Facebook"
                >
                  <SiFacebook className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Twitter"
                >
                  <BsTwitter className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Instagram"
                >
                  <BsInstagram className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
              </div>
            </div>
            <div className="absolute hidden  group-hover:block inset-x-0 ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
          </div>
          <div className="flex items-center gap-3 relative group cursor-pointer shadow-sm ">
            <Image
              src={image4}
              alt=""
              height={150}
              width={200}
              className="rounded-sm w-[170px] h-[100px] sm:w-[200px] sm:h-[100px] object-cover"
            />
            <div className="mt-3 flex flex-col  items-start justify-end gap-3 w-52">
              <p className="text-primary text-[0.8rem] leading-[0.9rem] tracking-normal font-[500]">
                A Mentoring session with students from Mwangeka Girls Wundanyi.
              </p>
              <div className=" flex flex-row gap-4 ">
                <Link
                  legacyBehavior
                  href={"https://www.facebook.com/UnduguMentorship"}
                  title="Undugu Mentorship Initiative on Facebook"
                >
                  <SiFacebook className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Twitter"
                >
                  <BsTwitter className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Instagram"
                >
                  <BsInstagram className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
              </div>
            </div>
            <div className="absolute hidden  group-hover:block inset-x-0 ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
          </div>
          <div className="flex items-center gap-3 relative group cursor-pointer shadow-sm ">
            <Image
              src={image4}
              alt=""
              height={150}
              width={200}
              className="rounded-sm w-[170px] h-[100px] sm:w-[200px] sm:h-[100px] object-cover"
            />
            <div className="mt-3 flex flex-col  items-start justify-end gap-3 w-52">
              <p className="text-primary text-[0.8rem] leading-[0.9rem] tracking-normal font-[500]">
                A Mentoring session with students from Mwangeka Girls Wundanyi.
              </p>
              <div className=" flex flex-row gap-4 ">
                <Link
                  legacyBehavior
                  href={"https://www.facebook.com/UnduguMentorship"}
                  title="Undugu Mentorship Initiative on Facebook"
                >
                  <SiFacebook className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Twitter"
                >
                  <BsTwitter className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
                <Link
                  href={"/"}
                  title="Undugu Mentorship Initiative on Instagram"
                >
                  <BsInstagram className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                </Link>
              </div>
            </div>
            <div className="absolute hidden  group-hover:block inset-x-0 ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
