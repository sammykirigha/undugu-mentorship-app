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
  );
}

export default page;
