import AcademicStats from "@/src/components/AcademicsStats";
import Gallery from "@/src/components/Gallery";
import Gallery2 from "@/src/components/Gallery2";
import TestimonialCarousel from "@/src/components/TestimonialCarousel";
import { Testmonials } from "@/src/components/Testmonials";
import { client } from "@/src/lib/sanity.client";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { FaDollarSign } from "react-icons/fa";

const getData = async () => {
  const query = `*[_type=="testimonial"][0..3]`;
  return await client.fetch(query) as Testimonial[];
};

export default async function Home() {
  const data = await getData();

  return (
    <div className="bg-white">
      <div className="relative bg-hero-pattern bg-cover pt-20 before:z-10 bg-center bg-[black]/60 -[65vh]">
        <div className="bg-black/60">
          <div className="min-h-[65vh] flex-col  flex pt-[150px] bg-slate-100_">
            <div className="container  z-20 flex flex-col items-center justify-center flex-1 h-full p-2 sm:p-4 lg:p-0">
              <h1 className="text-[30px] capitalize leading-[70px] font-bold text-white lg:text-[60px]">
                Undugu Mentorship Initiative
              </h1>
              <p className="max-w-[600px] lg:my-8 mb-6 text-center text-white lg:text-lg ">
                The organization envisages every responsible adult taking
                responsibility to offer support, guidance and motivation to the
                younger generation. We have a pool of mentors working with various
                schools in the entire Coastal region. Our mentorship curriculum is
                professionally structured to achieve intended results
              </p>

              <div className="flex gap-3 mb-8 ">
                <Link
                  href="about"
                  className="px-8 py-3 text-lg rounded font-[500] bg-[#ffa500] border border-[#ffa500] text-white hover:bg-white hover:text-[#ffa500] "
                >
                  About Us
                </Link>
                <Link
                  href="events"
                  className=" px-8  py-3 bg-white border font-[500] border-[#ffa500] hover:bg-[#ffa500] hover:text-white text-[#ffa500] rounded text-lg  transition"
                >
                  Our Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-7 md:py-16 bg-white flex flex-col items-center justify-center px-[10px] md:px-0">
        <h1 className="text-[28px] text-center font-bold mb-16 text-amber-500">Who We Are and What We Do</h1>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Who we are? Card */}
            <div className="rounded-3xl bg-gray-100 hover:bg-amber-500 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:text-white p-8 flex flex-col items-center text-center">
              <h2 className="text-2xl font-semibold mb-6">Who we are ?</h2>
              <p className="text-[16px]">
                Undugu Mentorship Initiative is a registered Non-Governmental Organization working
                with Secondary Schools students and the youth in counties within the Coast region.
                The idea was born when likeminded friends came together in 2006 with a view of
                making a difference in the lives of people and to instill the culture of academic
                excellence to improve education outcomes.
              </p>
            </div>

            {/* What we do? Card */}
            <div className="rounded-3xl bg-gray-100 hover:bg-amber-500 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:text-white p-8 flex flex-col items-center text-center">
              <h2 className="text-2xl font-semibold mb-6">What we do ?</h2>
              <p className="text-[16px]">
                Undugu Mentorship Initiative operates in a region that has in no doubt lagged behind
                in matters of education and development. Hence the need for creation of this
                organization to help the students ... The organization envisages every responsible
                adult taking responsibility to offer support, guidance and motivation to the younger
                generation.
              </p>
            </div>

            {/* How we do this? Card */}
            <div className="rounded-3xl bg-gray-100 hover:bg-amber-500 hover:text-white shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg  p-8 flex flex-col items-center text-center">

              <h2 className="text-2xl font-semibold mb-6">How we do this?</h2>
              <p className="text-[16px]">
                Our model is founded on recruiting mature, responsible and high integrity volunteers
                who have a passion for volunteerism. These volunteers are tasked to motivate,
                inspire and share their life experiences with the mentees in order to positively influence
                them. The mentees gain by boosting their self-esteem, confidence and desire to
                excel.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#063565] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight">
                UNDUGU MENTORSHIP INITIATIVE
              </h2>

              <div className="w-12 h-1 bg-[#ffa500]"></div>

              <p className="text-gray-300 leading-relaxed">
                Undugu Mentorship Initiative operates in a region that has in no doubt lagged behind in
                matters of education and development. The organization envisages every responsible
                adult taking responsibility to offer support, guidance and motivation to the younger
                generation. Our model is founded on recruiting mature, responsible and high integrity
                volunteers who have a passion for volunteerism.
              </p>

              <div>
                <Link href="/about" className="inline-block px-6 py-3 bg-yellow-500 text-black font-medium rounded-md hover:bg-yellow-400 transition-colors">
                  Read More
                </Link>
              </div>
            </div>

            <div className="relative h-80 md:h-96 overflow-hidden">
              <Image
                src="/image-3.jpg"
                alt="Large group of people at an Undugu Mentorship gathering"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <TestimonialCarousel />

      <Gallery />

      {/* <div className="bg-[#F7F8F9]">
        <div className="min-h-auto flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center bg-opacity-80 p-2">
          <h2 className="text-2xl md:text-4xl text-center font-bold sm:leading-[60px]">
            Become the Best Version of Yourself
          </h2>

          <p className="max-w-xl my-4 text-center md:my-8 ">
            We are here to help you reach your goals. Sign up for a free
            consultation today to discover how we can help you on your journey.
          </p>

          <Link href="/contact-us" className="flex items-center justify-center gap-4  border-[2px] border-[#ffa500] hover:bg-[#ffa500] hover:text-white text-[#ffa500] w-[200px] text-lg py-3 rounded-md">
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
      </div> */}

      <AcademicStats />

      {/* Blogs Sample */}

      <div className="bg-white">
        <div className="container">
          <div className="flex justify-between"></div>
        </div>
      </div>
    </div>
  );
}
