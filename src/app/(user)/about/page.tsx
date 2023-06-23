"use client";

import React from "react";
import style from "./about.module.css";
import Image from "next/image";
import audi from "../../../../public/img/blackAudi.jpg";
import about from "../../../../public/img/aboutImg2.webp";
import coach1 from "../../../../public/img/coach1.webp";
import coach2 from "../../../../public/img/coach3.webp";
import coach3 from "../../../../public/img/coach4.webp";
import coach4 from "../../../../public/img/coach5.webp";
import coach5 from "../../../../public/img/coach6.webp";
import coach6 from "../../../../public/img/coach7.webp";

function About() {
  return (
    <section>
      {/* Introduction section */}

      <section className="w-full flex justify-center">
        <div className="flex w-10/12 ">
          <h1 className="w-1/2 flex items-center font-extrabold text-5xl">
            About Undugu Mentorship Initiative
          </h1>
          <Image
            className={style.imgCoaching}
            src={about}
            alt="About our goals"
            quality={100}
            placeholder="blur"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* Our mission */}

      <section className="w-full flex justify-center mt-24 h-96">
        <div className="flex w-10/12 gap-8">
          <div className="w-1/2 flex flex-col items-center justify-center gap-5">
            <h3 className="text-center font-extrabold text-3xl">Our Mission</h3>
            <p>
              We will partner with interest groups in Education, Religion, NGOs,
              Government among others in reaching out to the youth to affect
              them positively and empower them to make decisions that will
              ultimately improve their way of life
            </p>
          </div>
          <div className="w-1/2">
            <Image
              className="w-full"
              src={audi}
              alt="About our goals"
              quality={100}
              placeholder="blur"
              style={{
                objectFit: "cover",
                height: " 100%",
              }}
            />
          </div>
        </div>
      </section>

      {/* core principles */}
      <section className="w-full flex justify-center mt-24 ">
        <div className="flex w-10/12 gap-8">
          <div className="w-1/2">
            <Image
              className="w-full"
              src={audi}
              alt="About our goals"
              quality={100}
              placeholder="blur"
              style={{
                objectFit: "cover",
                height: " 50%",
              }}
            />
          </div>

          <div className="w-1/2 flex flex-col">
            <h3 className="text-center font-extrabold text-3xl">Our Motto</h3>
            <p>Giving back to society</p>
            <h3 className="text-center font-extrabold text-3xl">Our Vision</h3>
            <p>
              To improve the well being of the society by transforming the
              thinking of young generation to take responsibility for their
              lives by making informed decisions
            </p>
            <h3 className="text-center font-extrabold text-3xl">Our Values</h3>
            <ul>
              <li>Philanthropic-All activities are on voluntary basis</li>
              <li>Creativity and innovation</li>
              <li>Team-work and participation</li>
              <li>Integrity</li>
              <li>Responsibility</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
