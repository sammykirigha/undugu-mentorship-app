import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";

export default async function Home() {
  return (
    <div className="bg-black/80">
      <div className="relative bg-[url(https://bestwpware.com/html/tm/hilux-demo/assets/img/bg/home-bg.jpg)] bg-cover before:z-10 bg-center before:bg-[black]/60 before:h-[100%] before:absolute before:w-full">
        <div className="min-h-[60vh] flex-col  flex pt-[130px] bg-slate-100_">
          <div className="container z-20 flex flex-col items-center justify-center flex-1 h-full p-2 sm:p-4 lg:p-0">
            <h1 className="text-[30px] capitalize leading-[70px] font-bold text-white lg:text-[60px]">Undugu Mentorship Initiative</h1>
            <p className="max-w-[500px] lg:my-8 mb-6 text-center text-white lg:text-lg ">
              The organization envisages every responsible adult taking responsibility to offer support, guidance and motivation to the younger generation.
            </p>

            <div className="flex gap-3">
              <Link href="about" className="px-8 py-3 text-lg transition bg-white rounded hover:bg-darkBlue hover:text-white">About Us</Link>
              <Link href="events" className="bg-[#1ea2a0] px-8 text-white py-3 hover:bg-darkBlue rounded text-lg hover:text-white transition">Our Events</Link>
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

      <div className="flex flex-col-reverse lg:flex-row min-h-[800px]">

        <div className="lg:flex-1 relative bg-cover h-[250px] lg:h-auto  bg-no-repeat bg-['center left'] bg-[url(https://templatekit.jegtheme.com/lifkoach/wp-content/uploads/sites/352/2023/03/presentation-during-business-seminar.jpg)]">
          <div className="">
            <div className="absolute inset-0 bottom-bg-overlay"></div>
            <div className="absolute inset-x-0 flex justify-center bottom-5">
              <div className="w-full max-w-xl p-2 mx-auto text-white">
                <h4 className="text-xl font-bold sm:text-2xl">Achieve goals and create positive change</h4>
                <p className="mt-3 tracking-wide">May 12th-14th, 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-1 py-6 bg-darkBlue">
          <div className="flex flex-col max-w-[800px] justify-center gap-6 p-2 text-white  md:gap-8 md:p-4 lg:p-16">
            <h4 className="text-3xl md:text-4xl font-bold leading-[40px]">
              Dare to Dream Big and Step <br /> into Your Power to Achieve Your Goals
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <hr className="opacity-60" />

            <div className="flex gap-3">
              <CheckCircleIcon className="w-10 h-10 text-[#1ea2a0]" />
              <div>
                <h5 className="text-xl sm:text-2xl">Licensed Mentors</h5>
                <p className="mt-2 text-sm sm:text-base">
                  Vitae platea fermentum, in pellentesque lectus vitae. Iaculis sit viverra vulputate proin malesuada mollis. Morbi quis a, sapien, in pellentesque.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircleIcon className="w-10 h-10 text-[#1ea2a0]" />
              <div>
                <h5 className="text-xl sm:text-2xl">High Performance</h5>
                <p className="mt-2 text-sm sm:text-base">
                  Vitae platea fermentum, in pellentesque lectus vitae. Iaculis sit viverra vulputate proin malesuada mollis. Morbi quis a, sapien, in pellentesque.              </p>
              </div>
            </div>

          </div>
        </div>

      </div>


      <div className="bg-[#F7F8F9]">

        <div className="min-h-[500px] flex flex-col justify-center items-center bg-[url(/assets/overlay-cta.png)] bg-cover bg-no-repeat bg-center bg-opacity-80 p-2">
          <h2 className="text-2xl md:text-4xl text-center font-bold sm:leading-[60px]">Become the Best Version of Yourself</h2>

          <p className="max-w-xl my-4 text-center md:my-8 ">We are here to help you reach your goals. Sign up for a free consultation today to discover how we can help you on your journey.</p>

          <button
            className="flex items-center justify-center gap-4 bg-primary text-white w-[200px] text-lg py-3 rounded-md"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>

      </div>

      {/* Blogs Sample */}

      <div className="bg-white">

        <div className="container">

          <div className="flex justify-between">
            
          </div>
        </div>
      </div>
    </div>
  );
}
