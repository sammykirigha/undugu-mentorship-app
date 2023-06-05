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
  // const posts = await client.fetch(query);
  // console.log({ posts }, "<<<<<>>>>", { isEnabled });

  return (
    <div className=" flex flex-col w-full mt-[95px] max-w-[1400px] mx-auto ">
      <div className="flex flex-col lg:flex-row items-start justify-center mt-12 gap-10 w-full pt-3 md:pt-0 px-3 2xl:px-0 ">
        <div className=" relative w-[100%]">
          <Image
            src={image_one}
            alt="image"
            width={500}
            className="object-cover w-full bg-no-repeat"
          />
          <div className="absolute bottom-0 p-2 left-0 right-0 text-left transition-all ease-in-out duration-200 bg-gradient-to-t from-primary">
            <p className="text-white text-[1.3rem] leading-[1.3rem] tracking-normal font-[600]">
              A Mentoring session with students at Mwangeka Girls Wundanyi.
            </p>
          </div>
        </div>
        <div className=" w-[50%] lg:w-[50%] flex flex-col items-start gap-5 h-auto  ">
          <div className=" flex flex-col items-start">
            <div className="w-full ">
              <h1
                className="text-primary whitespace-nowrap text-[1.3rem] font-[700] opacity-90 flex 
              items-center gap-3 before:content-[''] before:h-1 before:w-full 
              before:bg-primary before:block after:content-[''] 
              after:h-1 after:w-full after:bg-primary after:block"
              >
                Our Motivation
              </h1>
              <p className="text-[1.0rem] text-start text-primary leading-tight font-headline mt-2">
                Impacting Lives Through Mentorships Programs.
              </p>
            </div>

            <div className="flex flex-col mt-3 relative group pb-3 ">
              <h1
                className="text-primary  text-[1.3rem] font-[700] opacity-90 flex 
              items-center"
              >
                Our Mission
              </h1>
              <p className=" text-[1rem] text-primary line-clamp-3">
                We will partner with interest groups in Education, Religion,
                NGOs, Government among others in reaching out to the youth to
                affect them positively and empower them to make decisions that
                will ultimately improve their way of life.
              </p>
              <div className="absolute hidden  group-hover:block inset-x-0  ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
            </div>

            <div className="flex flex-col mt-3 relative group pb-3 ">
              <h1
                className="text-primary text-[1.3rem] font-[700] opacity-90 flex 
              items-center"
              >
                Our Vission
              </h1>
              <p className=" text-[1rem] text-primary">
                To improve the well being of the society by transforming the
                thinking of young generation to take responsibility for their
                lives by making informed decisions
              </p>
              <div className="absolute hidden group-hover:block inset-x-0  ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
            </div>

            <div className="flex flex-col mt-3 relative group pb-3 w-full ">
              <h1
                className="text-primary text-[1.3rem] font-[700] opacity-90 flex 
              items-center"
              >
                Our Motto
              </h1>
              <p className=" text-[1rem] text-primary">
                Giving back to society
              </p>
              <div className="absolute hidden group-hover:block inset-x-0  ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
            </div>
          </div>
          {/* social links */}
          <div className=" flex flex-row gap-10 lg:hidden 2xl:flex ">
            <Link
              legacyBehavior
              href={"https://www.facebook.com/UnduguMentorship"}
              title="Undugu Mentorship Initiative on Facebook"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-primary rounded-lg cursor-pointer"
              >
                <BsFacebook className="w-8 h-8 text-white text-center bg-primary rounded-lg " />
              </a>
            </Link>
            <Link
              href={"/"}
              title="Undugu Mentorship Initiative on Twitter"
              className="w-8 h-8 flex items-center justify-center bg-primary rounded-lg cursor-pointer"
            >
              <AiFillTwitterSquare className="w-8 h-8 text-white text-center bg-primary rounded-lg" />
            </Link>
            <Link
              href={"/"}
              title="Undugu Mentorship Initiative on Instagram"
              className="w-8 h-8 flex items-center justify-center bg-primary rounded-lg cursor-pointer"
            >
              <AiOutlineInstagram className="w-8 h-8 text-white text-center bg-primary rounded-lg " />
            </Link>
          </div>
        </div>
      </div>

      <div className=" mt-6 max-w-[1400px] mx-auto mb-14 px-3 2xl:px-0">
        <RecentEvents />
      </div>
    </div>
  );
}
