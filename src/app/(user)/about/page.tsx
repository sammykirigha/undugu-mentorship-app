"use client";

import Image from "next/image";
import img2 from "../../../../public/Taru_boys.jpg";
import img from "../../../../public/home-page-photo.jpg";
import style from "./about.module.css";
import { About } from "@/src/components/About";
import AboutPage from "@/src/components/OurStory";
import LeadershipTeam from "@/src/components/LeadershipTeam";

function page() {

  return (
    <div className="mt-[100px]">

      <About />
      <AboutPage />
      <LeadershipTeam />

    </div>
    // <section>
    //   {/* banner content */}
    //   <section className={`${style.aboutbanner} mt-[78px] w-full h-64 xl:h-[90vh]`}>
    //     <div className="w-full flex items-center relative">
    //       <div className="w-full xl:w-[50%] flex items-center justify-center mx-5 mt-10 xl:mt-0">
    //         <h1 className="text-[25px] lg:text-[45px] text-[#1ea2a0] whitespace-nowrap lg:whitespace-normal leading-[24px] lg:leading-[50px] font-[700]">
    //           Helping Students <br className="hidden lg:block"></br> Grow Better
    //         </h1>
    //       </div>
    //       <div className="w-[50%] pt-0 relative ">
    //         <Image
    //           className="w-full h-[500px] rounded-bl-[350px] hidden xl:block"
    //           src={img}
    //           alt="Our story pic"
    //           quality={100}
    //           placeholder="blur"
    //           style={{
    //             objectFit: "cover",
    //           }}
    //         />
    //       </div>
    //       <div className="hidden max-h-auto max-w-20 absolute bottom-0 left-[50%]  xl:grid xl:grid-cols-3 lg:gap-4">
    //         <div className="bg-[#1ea2a0] h-5 w-5 rounded-full"></div>
    //         <div className="bg-[#1ea2a0] h-5 w-5 rounded-full"></div>
    //         <div className="bg-[#1ea2a0] h-5 w-5 rounded-full"></div>
    //         <div className="bg-[#1ea2a0] h-5 w-5 rounded-full"></div>
    //         <div className="bg-[#1ea2a0] h-5 w-5 rounded-full"></div>
    //         <div className="bg-[#1ea2a0] h-5 w-5 rounded-full"></div>
    //         <div className="bg-[#1ea2a0] h-5 w-5 rounded-full"></div>
    //         <div className="bg-[#1ea2a0] h-5 w-5 rounded-full"></div>
    //         <div className="bg-[#1ea2a0] h-5 w-5 rounded-full"></div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* our mission */}

    //   <section className="container flex justify-center h-auto py-2">
    //     <div className="w-full flex flex-col-reverse md:flex-row gap-10 px-[20px] lg:px-0">
    //       <div className="flex flex-col w-full md:w-1/2 ">
    //         <h3 className="text-[25px] leading-[25px] font-[700] text-[#1ea2a0]">Our mission</h3>
    //         <p className=" mt-3 text-[18px] leading-[30px]">
    //           We will partner with interest groups in Education, Religion, NGOs,
    //           Government among others in reaching out to the youth to affect them
    //           positively and empower them to make decisions that will ultimately
    //           improve their way of life.
    //         </p>
    //       </div>
    //       <div className={`${style.missionImg} `}>
    //         <Image
    //           className="w-full h-52 lg:h-80  rounded-sm lg:rounded-tr-[50%] lg:rounded-br-[50%]"
    //           id={style.missionImg}
    //           src={img2}
    //           alt="Our story pic"
    //           quality={100}
    //           placeholder="blur"
    //           style={{
    //             objectFit: "cover",
    //           }}
    //         />
    //       </div>
    //     </div>
    //   </section>

    //   {/* Our story */}
    //   <section className="container flex justify-center my-16">
    //     <div className="w-full px-[20px] flex flex-col md:flex-row gap-10">
    //       <div className="w-full lg:w-[50%]">
    //         <Image
    //           className="w-full h-52 lg:h-80  rounded-lg"
    //           id={style.storyImg}
    //           src={img}
    //           alt="Our story pic"
    //           quality={100}
    //           placeholder="blur"
    //           style={{
    //             objectFit: "cover",
    //           }}
    //         />
    //       </div>
    //       <div className="w-full lg:w-[50%]">
    //         <h3 className="text-[25px] leading-[25px] font-[700] text-[#1ea2a0]">Our mission</h3>
    //         <p className=" mt-3 text-[18px] leading-[30px]">
    //           To improve the well being of the society by transforming the thinking of young generation to take responsibility for their lives by making informed decisions.
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    // </section>
  );
}

export default page;
