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
            professionally structured to achieve intended results. The mentees
            gain by boosting their self-esteem, confidence and desire to excel
            as well as valuable lessons on life skills, career, positive
            attitude, avoidance of social evils such as drug abuse, immorality
            and risky behaviors.
          </p>
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
                src={coach1}
                alt="Coach"
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
                src={coach2}
                alt="Coach"
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
                src={coach3}
                alt="Coach"
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
                src={coach4}
                alt="Coach"
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
                src={coach5}
                alt="Coach"
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
