"use client";

import React from "react";
import Link from "next/link";
import style from "./about.module.css";
import Image from "next/image";
import audi from "../../../../public/img/blackAudi.jpg";
import banner from "../../../../public/img/bannerImg.webp";
import mission from "../../../../public/img/mission.webp";
import story from "../../../../public/img/story.webp";

function About() {
  return (
    <section>
      {/* banner content */}
      <section className={style.aboutbanner}>
        <div className="w-full flex items-center">
          <div className="w-6/12" id={style.bannerContent}>
            <h1 className="font-black text-center text-blue-600 text-3xl">
              Undugu Mentorship Initiative
            </h1>
          </div>
          <div className="w-6/12" id={style.bannerImg}>
            {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <mask id="img_path">
                  <path
                    fill="#FF0066"
                    d="M39,-38.9C55,-33,75.6,-25,80.9,-11.8C86.2,1.5,76.3,19.9,63.8,32.3C51.3,44.7,36.1,51.1,21.3,54.9C6.5,58.8,-7.9,60,-23.1,57.2C-38.2,54.4,-54.2,47.4,-61.2,35.3C-68.2,23.2,-66.4,5.9,-62.8,-10.5C-59.3,-27,-54,-42.5,-43.3,-49.3C-32.5,-56,-16.3,-53.9,-2.4,-51.1C11.5,-48.3,23,-44.7,39,-38.9Z"
                    transform="translate(100 100)"
                  />
                </mask>
              </defs> */}

            {/* </svg> */}
            <Image
              className="w-full h-96"
              src={banner}
              alt="Our story pic"
              quality={100}
              placeholder="blur"
              style={{
                // mask: "url(#img_path)",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </section>

      {/* our mission */}

      <section className="container flex justify-center" id={style.mission}>
        <div className="w-5/6 flex gap-10" id={style.missionDiv}>
          <div className="flex flex-col w-1/2" id={style.missionContent}>
            <h3 className="font-black text-center text-blue-600 text-3xl pt-6 pb-5">
              Our mission
            </h3>
            <p className="pb-5">
              The organization envisages every responsible adult taking
              responsibility to offer support, guidance and motivation to the
              younger generation. We have a pool of mentors working with various
              schools in the entire Coastal region. Our mentorship curruculum is
              professionally structured to achieve intended results.
            </p>
            <p>
              The mentees gain by boosting their self-esteem, confidence and
              desire to excel as well as valuable lessons on life skills,
              career, positive attitude, avoidance of social evils such as drug
              abuse, immorality and risky behaviors.
            </p>
          </div>
          <div className={style.missionImg}>
            <Image
              className="w-full h-96"
              id={style.missionImg}
              src={mission}
              alt="Our story pic"
              quality={100}
              placeholder="blur"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="container flex justify-center mt-24">
        <div className="w-5/6 flex gap-10" id={style.story}>
          <div className={style.storyImg}>
            <Image
              className="w-full h-96"
              id={style.storyImg}
              src={story}
              alt="Our story pic"
              quality={100}
              placeholder="blur"
              style={{
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="w-1/2" id={style.storyContent}>
            <h3 className="font-black text-center text-blue-600 text-3xl pt-6 pb-5">
              Our Story
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, ab
              deleniti deserunt quam unde nesciunt consequuntur sequi voluptate
              explicabo suscipit atque exercitationem corporis debitis vitae
              eius sit neque in ratione itaque qui? Fuga tempora quo
              exercitationem quos iusto obcaecati labore, officia laudantium,
              nostrum magnam numquam cupiditate et non debitis deserunt
              perferendis corrupti molestias sint laboriosam? Eius enim, odit
              dicta ad optio, adipisci temporibus ratione nihil vero quisquam
              error atque explicabo itaque ipsum magni nulla, voluptates impedit
              tempora hic. Temporibus, amet sint! Doloremque nobis reprehenderit
              molestiae laborum quae, ratione, at eligendi, maxime inventore
              tempore facere itaque a. Earum alias nobis minima?
            </p>
          </div>
        </div>
      </section>

      {/* Our History */}

      <section className="container flex justify-center mt-24 mb-24"></section>
    </section>
  );
}

export default About;
