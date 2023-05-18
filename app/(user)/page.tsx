
import { BsFacebook } from "react-icons/bs";
import {groq} from "next-sanity";
import { AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Link from "next/link";
import NavBar from "@/components/NavBar/page";
import Footer from "@/components/footer/page";
import CarouselPage from "@/components/Carousel";
import { client } from "@/lib/sanity.client";
import { draftMode } from "next/headers";

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories->
} | order(_createdAt desc)
`;

async function getData(){
  const {isEnabled} = draftMode();
  return isEnabled;
}

export default async function Home() {
  const isEnabled = await getData()
  const posts = await client.fetch(query)
  console.log({posts},"<<<<<>>>>", {isEnabled});
  
  return (
    <div>
      <NavBar />
      <div className=" flex w-full mt-[95px] max-w-[1400px] mx-auto ">
        <div className="flex flex-col lg:flex-row items-start justify-center mt-12 gap-10 w-full pt-3 md:pt-0 px-3 2xl:px-0">
          <CarouselPage />
          <div className=" w-full lg:w-auto flex flex-col items-center justify-center items-start justify-between h-[550px]">
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
                <p className="text-[1.1rem] text-center text-text leading-tight font-headline mt-7">
                  Impacting Lives Through Mentorship.
                </p>
              </div>
              <div className="flex flex-col mt-5 hover:border-b-2 hover:border-primary pb-3 w-full">
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
              </div>
              <div className="flex flex-col mt-5 hover:border-b-2 hover:border-primary pb-3 w-full">
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
              </div>
              <div className="flex flex-col mt-5 hover:border-b-2 hover:border-primary pb-3 w-full">
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
              </div>
            </div>
            {/* social links */}
            <div className=" flex flex-row gap-10 block py-4 lg:hidden xl:flex xl:inline-block">
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

      <Footer />
    </div>
  );
}

