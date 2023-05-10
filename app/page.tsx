import Image from "next/image";
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterSquare, AiOutlineInstagram} from "react-icons/ai"
import image from "../public/home-page-photo.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex w-full mt-[95px] max-w-[1400px] mx-auto ">
      <div className="flex flex-col md:flex-row items-start justify-center mt-12 gap-10">
        <div className="">
          <Image
            src={image}
            alt="hero image"
            width={850}
            className="object-cover  "
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1
              className="text-primary whitespace-nowrap text-[1.3rem] font-[700] opacity-90 flex 
              items-center gap-3 before:content-[''] before:h-1 before:w-full md:before:w-10 lg:before:w-full
              before:bg-primary before:block after:content-[''] 
              after:h-1 after:w-full md:after:w-10 lg:after:w-full after:bg-primary after:block"
            >
              What Is Our Motivation?
            </h1>
            <p>
              Transforming Lives through mentorship programs.
            </p>
          </div>
          <div className="flex flex-col mt-5">
            <h1  className="text-primary text-[1.3rem] font-[700] opacity-90 flex 
              items-center">Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              recusandae iusto veritatis corporis a cupiditate laborum ad
              officia, laboriosam quod suscipit facere harum minima
              exercitationem.
            </p>
          </div>
          <div className="flex flex-col mt-5">
            <h1  className="text-primary text-[1.3rem] font-[700] opacity-90 flex 
              items-center">Our Vission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              recusandae iusto veritatis corporis a cupiditate laborum ad
              officia, laboriosam quod suscipit facere harum minima
              exercitationem.
            </p>
          </div>
          <div className="flex flex-col mt-5">
            <h1  className="text-primary text-[1.3rem] font-[700] opacity-90 flex 
              items-center">Our Motto</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              recusandae iusto veritatis corporis a cupiditate laborum ad
              officia, laboriosam quod suscipit facere harum minima
              exercitationem.
            </p>
          </div>
           {/* social links */}
          <div className="mt-24 flex gap-10">
            <Link href={"/"} title="Undugu Mentorship Initiative on Facebook" className="w-12 h-12 flex items-center justify-center bg-primary rounded-lg cursor-pointer" >
            <BsFacebook className="w-8 h-8 text-white text-center bg-primary " />
            </Link>
            <Link href={"/"} title="Undugu Mentorship Initiative on Twitter"   className="w-12 h-12 flex items-center justify-center bg-primary rounded-lg cursor-pointer">
            <AiFillTwitterSquare className="w-8 h-8 text-white text-center bg-primary " />
            </Link>
            <Link href={"/"} title="Undugu Mentorship Initiative on Instagram" className="w-12 h-12 flex items-center justify-center bg-primary rounded-lg cursor-pointer">
            <AiOutlineInstagram className="w-8 h-8 text-white text-center bg-primary " />
            </Link >

          </div>
        </div>
      </div>
    </div>
  );
}
