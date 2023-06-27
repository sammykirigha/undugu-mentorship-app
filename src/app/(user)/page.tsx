import { Testmonials } from "@/src/components/Testmonials";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="bg-white">
      <div className="relative bg-hero-pattern bg-cover before:z-10 bg-center before:bg-[black]/40 before:h-[100%] before:absolute before:w-full">
        <div className="min-h-[60vh] flex-col  flex pt-[130px] bg-slate-100_">
          <div className="container z-20 flex flex-col items-center justify-center flex-1 h-full p-2 sm:p-4 lg:p-0">
            <h1 className="text-[30px] capitalize leading-[70px] font-bold text-white lg:text-[60px]">
              Undugu Mentorship Initiative
            </h1>
            <p className="max-w-[600px] lg:my-8 mb-6 text-center text-white lg:text-lg ">
              The organization envisages every responsible adult taking
              responsibility to offer support, guidance and motivation to the
              younger generation. We have a pool of mentors working with various
              schools in the entire Coastal region. Our mentorship curruculum is
              professionally structured to achieve intended results
            </p>

            <div className="flex gap-3 mb-8 ">
              <Link
                href="about"
                className="px-8 py-3 text-lg transition bg-white rounded hover:bg-darkBlue hover:text-white"
              >
                About Us
              </Link>
              <Link
                href="events"
                className="bg-[#1ea2a0] px-8 text-white py-3 hover:bg-darkBlue rounded text-lg hover:text-white transition"
              >
                Our Events
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row min-h-[800px]">
        <div className="lg:flex-1 relative bg-cover h-[250px] lg:h-auto  bg-no-repeat bg-['center left'] bg-hero-pattern lg:bg-hero-pattern">
          <div className="">
            <div className="absolute inset-0 bottom-bg-overlay"></div>
            <div className="absolute inset-x-0 flex justify-center bottom-5">
              <div className="w-full max-w-xl p-2 mx-auto text-white">
                <h4 className="text-xl font-bold sm:text-2xl">
                  Achieve goals and create positive change
                </h4>
                <p className="mt-3 tracking-wide">May 12th-14th, 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-1 py-6 bg-[#1ea2a0]">
          <div className="flex flex-col max-w-[800px] justify-center gap-6 p-2 text-white  md:gap-8 md:p-4 lg:p-16">
            <h4 className="text-3xl md:text-4xl font-bold leading-[40px]">
              What Is Our Motivation
            </h4>
            <p>
              Transforming Lives Through Mentorship. The mentees gain by
              boosting their self-esteem, confidence and desire to excel as well
              as valuable lessons on life skills, career, positive attitude,
              avoidance of social evils such as drug abuse, immorality and risky
              behaviors.
            </p>

            <hr className="opacity-60" />

            <div className="flex gap-3">
              <CheckCircleIcon className="w-10 h-10 text-darkBlue" />
              <div className="flex-1">
                <h5 className="text-xl sm:text-2xl">Our Mission</h5>
                <p className="mt-2 text-sm sm:text-base">
                  We will partner with interest groups in Education, Religion,
                  NGOs, Government among others in reaching out to the youth to
                  affect them positively and empower them to make decisions that
                  will ultimately improve their way of life.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircleIcon className="w-10 h-10 text-darkBlue" />
              <div className="flex-1">
                <h5 className="text-xl sm:text-2xl">Our Vission</h5>
                <p className="mt-2 text-sm sm:text-base">
                  To improve the well being of the society by transforming the
                  thinking of young generation to take responsibility for their
                  lives by making informed decisions.{" "}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircleIcon className="w-10 h-10 text-darkBlue" />
              <div className="flex-1">
                <h5 className="text-xl sm:text-2xl">Our Motto</h5>
                <p className="mt-2 text-sm sm:text-base">
                  Giving back to society{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testmonials />

      <div className="bg-[#F7F8F9]">
        <div className="min-h-[500px] flex flex-col justify-center items-center bg-[url(/assets/overlay-cta.png)] bg-cover bg-no-repeat bg-center bg-opacity-80 p-2">
          <h2 className="text-2xl md:text-4xl text-center font-bold sm:leading-[60px]">
            Become the Best Version of Yourself
          </h2>

          <p className="max-w-xl my-4 text-center md:my-8 ">
            We are here to help you reach your goals. Sign up for a free
            consultation today to discover how we can help you on your journey.
          </p>

          <Link href="/contact-us" className="flex items-center justify-center gap-4 bg-[#1ea2a0] hover:bg-darkBlue text-white w-[200px] text-lg py-3 rounded-md">
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Blogs Sample */}

      <div className="bg-white">
        <div className="container">
          <div className="flex justify-between"></div>
        </div>
      </div>
    </div>
  );
}
