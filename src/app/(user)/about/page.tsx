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
      {/* banner content */}
      <section className={style.aboutbanner}>
        <div className="w-full flex items-center">
          <div className="w-6/12">
            <h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
              sapiente.
            </h1>
          </div>
          <div className="w-6/12">
            <Image
              className="w-full h-96"
              src={audi}
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

      {/* our mission */}

      <section className="container flex justify-center">
        <div className="w-5/6 flex gap-10">
          <div className="flex flex-col w-1/2">
            <h3>Our mission</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non
              maiores ratione! Dolorem dicta repudiandae repellendus et adipisci
              enim eligendi, architecto quis iusto nulla eum reiciendis aliquid
              iure fugit odit, pariatur laborum reprehenderit a quibusdam. Unde
              impedit voluptates suscipit nesciunt similique facere pariatur
              itaque, voluptatem aperiam quae, numquam quas aspernatur
              consequatur et nemo harum laudantium distinctio. Quisquam tempora
              incidunt et quidem. Praesentium unde fuga doloremque numquam
              laudantium. Pariatur, quam eos. Dolorem, corporis. Ratione, sed
              doloremque nostrum fuga at facilis harum voluptates? Aut quas
              soluta suscipit? Saepe eligendi voluptatum repudiandae expedita
              alias error vel? Voluptas, iure necessitatibus! Perspiciatis rem
              soluta distinctio.
            </p>
          </div>
          <div className={style.missionImg}>
            <Image
              className="w-full h-96"
              id={style.missionImg}
              src={audi}
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
        <div className="w-5/6 flex gap-10">
          <div className={style.storyImg}>
            <Image
              className="w-full h-96"
              id={style.storyImg}
              src={audi}
              alt="Our story pic"
              quality={100}
              placeholder="blur"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="w-1/2">
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

      <section className="container flex justify-center mt-24 mb-24">
        <div
          id="controls-carousel"
          className="relative w-full flex justify-center"
          data-carousel="static"
        >
          {/* Carousel wrapper  */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96 w-5/6 ">
            {/* Item 1  */}
            <div
              className="active duration-700 ease-in-out w-full flex justify-center"
              data-carousel-item
            >
              <Image
                className="w-2/4 h-96"
                src={audi}
                alt="Our story pic"
                quality={100}
                placeholder="blur"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            {/*  Item 2 */}
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <Image
                className="w-2/4 h-96"
                src={audi}
                alt="Our story pic"
                quality={100}
                placeholder="blur"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Item 3 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                className="w-2/4 h-96"
                src={audi}
                alt="Our story pic"
                quality={100}
                placeholder="blur"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Item 4  */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                className="w-2/4 h-96"
                src={audi}
                alt="Our story pic"
                quality={100}
                placeholder="blur"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Item 5  */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                className="w-2/4 h-96"
                src={audi}
                alt="Our story pic"
                quality={100}
                placeholder="blur"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          {/* Slider controls  */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
    </section>
  );
}

export default About;
