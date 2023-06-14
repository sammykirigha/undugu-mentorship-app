import React from "react";
import style from "./about.module.css";
import Image from "next/image";
import audi from "../../../../public/img/blackAudi.jpg";
import benz from "../../../../public/img/benz.jpg";
import jeep from "../../../../public/img/jeep.jpg";

const data = [
  {
    id: "",
  },
];

function About() {
  return (
    <body className={style.aboutUsP}>
      <section className="container flex justify-center my-24 w-98 py-1.5 ">
        <div className={style.ourJourney}>
          <h1 className={style.journeyHeader}>
            About Undugu Mentorship Initiative
          </h1>
          <p className={style.journeryP}>
            The organization envisages every responsible adult taking
            responsibility to offer support, guidance and motivation to the
            younger generation. We have a pool of mentors working with various
            schools in the entire Coastal region. Our mentorship curruculum is
            professionally structured to achieve intended results.
          </p>
        </div>
      </section>

      <section className="container flex content-center py-0.5 justify-center">
        <div className={style.divImg}>
          <Image
            className={style.imgStlyes}
            src={audi}
            alt="Black Audi"
            quality={100}
            placeholder="blur"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            className={style.imgStlyes}
            src={benz}
            alt="Black Audi"
            quality={100}
            placeholder="blur"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            className={style.imgStlyes}
            src={jeep}
            alt="Black Audi"
            quality={100}
            placeholder="blur"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      <section className="container flex content-center py-0.5 justify-center my-8">
        <div className={style.customerQoute}>
          <p>
            The mentees gain by boosting their self-esteem, confidence and
            desire to excel as well as valuable lessons on life skills, career,
            positive attitude, avoidance of social evils such as drug abuse,
            immorality and risky behaviors.
          </p>
        </div>
      </section>

      <section className="container flex justify-center py-0.5 my-8">
        <div className={style.coaching}>
          <div className="coachingImg">
            <Image
              className={style.imgCoaching}
              src={audi}
              alt="Black Audi"
              quality={100}
              placeholder="blur"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          {/*make a custom accordion */}
          <div className={style.coachingDes}>
            <h1 className="pb-3">
              <b>Building A Brighter Future Through Holistic Coaching</b>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id illum
              nulla soluta porro cum incidunt, consectetur impedit veritatis
              quo, nesciunt error? At odio itaque voluptatum quas. Maxime,
              distinctio minus! Optio.
            </p>

            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-1"
                >
                  <span>What is Flowbite?</span>
                  <svg
                    data-accordion-icon
                    className="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-1"
                className="hidden"
                aria-labelledby="accordion-flush-heading-1"
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{" "}
                    <a
                      href="/docs/getting-started/introduction/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      get started
                    </a>{" "}
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-2"
                >
                  <span>Is there a Figma file available?</span>
                  <svg
                    data-accordion-icon
                    className="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-2"
                className="hidden"
                aria-labelledby="accordion-flush-heading-2"
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out the{" "}
                    <a
                      href="https://flowbite.com/figma/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Figma design system
                    </a>{" "}
                    based on the utility classNamees from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-3"
                >
                  <span>
                    What are the differences between Flowbite and Tailwind UI?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-3"
                className="hidden"
                aria-labelledby="accordion-flush-heading-3"
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>
                      <a
                        href="https://flowbite.com/pro/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/"
                        rel="nofollow"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container flex content-center py-0.5 justify-center my-8">
        <div className={style.approach}>
          <div className={style.life}>
            <h1 className={style.approachHeader}>Our Motto</h1>
            <p>Giving back to society</p>
            <h1 className={style.approachHeader}>Our Vision</h1>
            <p>
              To improve the well being of the society by transforming the
              thinking of young generation to take responsibility for their
              lives by making informed decisions
            </p>
            <h1 className={style.approachHeader}>Our Mission</h1>
            <p>
              We will partner with interest groups in Education, Religion, NGOs,
              Government among others in reaching out to the youth to affect
              them positively and empower them to make decisions that will
              ultimately improve their way of life
            </p>
          </div>
          <div className={style.lifeApproach}>
            <Image
              className={style.imgCoaching}
              src={audi}
              alt="Black Audi"
              quality={100}
              placeholder="blur"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      <section className="container flex content-center py-0.5 justify-center my-8">
        <div className={style.teams}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col justify-center">
              <h1 className={style.approachHeader}>Our Values</h1>
              <ul>
                <li>Philanthropic-All activities are on voluntary basis</li>
                <li>Creativity and innovation</li>
                <li>Team-work and participation</li>
                <li>Integrity</li>
                <li>Responsibility</li>
              </ul>
            </div>
            <div>
              <Image
                className={style.imgCoaching}
                src={audi}
                alt="Black Audi"
                quality={100}
                placeholder="blur"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <Image
                className={style.imgCoaching}
                src={audi}
                alt="Black Audi"
                quality={100}
                placeholder="blur"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <Image
                className={style.imgCoaching}
                src={audi}
                alt="Black Audi"
                quality={100}
                placeholder="blur"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <Image
                className={style.imgCoaching}
                src={audi}
                alt="Black Audi"
                quality={100}
                placeholder="blur"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <Image
                className={style.imgCoaching}
                src={audi}
                alt="Black Audi"
                quality={100}
                placeholder="blur"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default About;
