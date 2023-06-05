import { groq } from "next-sanity";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { draftMode } from "next/headers";
import image_one from "../../../public/Mentors_two.jpg";
import Image from "next/image";
import RecentEvents from "@/src/components/RecentEvents";
import { client } from "@/src/lib/sanity.client";

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories->
} | order(_createdAt desc)
`;

async function getData() {
  const { isEnabled } = draftMode();
  return isEnabled;
}

export default async function Home() {
  const isEnabled = await getData();
  const posts = await client.fetch(query);
  console.log({ posts }, "<<<<<>>>>", { isEnabled });

  return (
    <div>
      <div className=" flex w-full mt-[95px] max-w-[1400px] mx-auto ">
        <div className="flex flex-col lg:flex-row items-start justify-center mt-12 gap-10 w-full pt-3 md:pt-0 px-3 2xl:px-0">
          <div className="relative w-full">
            <div className="bg-red-700 w-full">
              <Image
                src={image_one}
                alt="image"
                width={700}
                height={450}
                className="object-cover brightness-50 w-full bg-no-repeat"
              />
            </div>
            <p className="absolute bottom-3 text-white text-[1rem] md:text-[1.5rem] lg:text-[2.0rem] font-semibold text-center px-2 ">
              Mentorship Session At Mwangeka Girls Wundanyi.
            </p>
          </div>
          <div className=" w-full lg:w-auto flex flex-col items-start justify-between h-auto ">
            <div className="w-full flex flex-col items-start">
              <div className="w-full ">
                <h1
                  className="text-primary whitespace-nowrap text-[1.3rem] font-[700] opacity-90 flex 
              items-center gap-3 before:content-[''] before:h-1 before:w-full 
              before:bg-primary before:block after:content-[''] 
              after:h-1 after:w-full after:bg-primary after:block"
                >
                  Our Motivation
                </h1>
                <p className="text-[1.1rem] text-center text-text leading-tight font-headline mt-2">
                  Impacting Lives Through Mentorship.
                </p>
              </div>

              <div className="flex flex-col mt-5 relative group pb-3 w-full">
                <h1
                  className="text-primary  text-[1.3rem] font-[700] opacity-90 flex 
              items-center"
                >
                  Our Mission
                </h1>
                <p className=" text-[1rem] text-primary line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  recusandae.
                </p>
                <div className="absolute hidden  group-hover:block inset-x-0  ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
              </div>

              <div className="flex flex-col mt-5 relative group pb-3 w-full">
                <h1
                  className="text-primary text-[1.3rem] font-[700] opacity-90 flex 
              items-center"
                >
                  Our Vission
                </h1>
                <p className=" text-[1rem] text-primary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  recusandae.
                </p>
                <div className="absolute hidden group-hover:block inset-x-0  ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
              </div>

              <div className="flex flex-col mt-5 relative group pb-3 w-full">
                <h1
                  className="text-primary text-[1.3rem] font-[700] opacity-90 flex 
              items-center"
                >
                  Our Motto
                </h1>
                <p className=" text-[1rem] text-primary">
                  <span className="text-text">Mentoring</span>
                  <br></br>A promising approach for youth development.
                </p>
                <div className="absolute hidden group-hover:block inset-x-0  ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
              </div>
            </div>
            {/* social links */}
            <div className=" flex flex-row gap-10 lg:hidden 2xl:flex mt-8 xl:mt-[90px] 2xl:mt-[100px]">
              <Link
                legacyBehavior
                href={"https://www.facebook.com/UnduguMentorship"}
                title="Undugu Mentorship Initiative on Facebook"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-primary rounded-lg cursor-pointer"
                >
                  <BsFacebook className="w-8 h-8 text-white text-center bg-primary " />
                </a>
              </Link>
              <Link
                href={"/"}
                title="Undugu Mentorship Initiative on Twitter"
                className="w-12 h-12 flex items-center justify-center bg-primary rounded-lg cursor-pointer"
              >
                <AiFillTwitterSquare className="w-8 h-8 text-white text-center bg-primary " />
              </Link>
              <Link
                href={"/"}
                title="Undugu Mentorship Initiative on Instagram"
                className="w-12 h-12 flex items-center justify-center bg-primary rounded-lg cursor-pointer"
              >
                <AiOutlineInstagram className="w-8 h-8 text-white text-center bg-primary " />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-6 max-w-[1400px] mx-auto mb-14 px-3 2xl:px-0">
        <RecentEvents />
      </div>
      
    </div>
  );
}
