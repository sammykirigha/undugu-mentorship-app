
import { urlForImage } from "@/src/lib/sanity-image";
import { client } from "@/src/lib/sanity.client";
import { isBefore } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import FacebookPost from "./FacebookPost";

const getData = async () => {
  const query = `*[_type=="event"]`;
  return await client.fetch(query) as any[];
};

async function Page() {
  const data = await getData();

  const pastEvents = data?.filter((data: any) => isBefore(new Date(data.date), new Date()));
  const upcomingEvents = data?.filter((data: any) => !isBefore(new Date(data.date), new Date()));


  return (
    <div className="mt-[50px] md:mt-[80px] xl:mt-[125px] flex flex-col xl:flex-row gap-10 w-full max-w-[1280px] mx-auto pt-5 pb-12 px-[20px] xl:px-0  ">
      {/* left */}
      <div className="mt-4">
        <h1
          className="text-primary whitespace-nowrap text-[1.3rem] font-[700] opacity-90 flex
              items-center gap-3 before:content-[''] before:h-1 before:w-full
              before:bg-primary before:block after:content-['']
              after:h-1 after:w-full after:bg-primary after:block"
        >
          UpComing Events
        </h1>
        <div className="flex flex-col w-full gap-6 py-5 bg-white ">
          {
            upcomingEvents?.map((event: any, idx: number) => (
              <div key={idx} className="relative flex gap-3 pb-3 shadow-sm cursor-pointer group">
                <Image
                  src={urlForImage(event?.mainImage).url()}
                  alt=""
                  height={150}
                  width={200}
                  className="rounded-sm"
                />
                <div className="flex flex-col items-start justify-between gap-3 mt-3 w-52">
                  <p className="text-primary text-[0.8rem] leading-[0.9rem] tracking-normal font-[500]">
                    {event?.title}
                  </p>
                  <div className="flex flex-row gap-4 ">
                    <Link
                      legacyBehavior
                      href={"https://www.facebook.com/UnduguMentorship"}
                      title="Undugu Mentorship Initiative on Facebook"
                    >
                      <SiFacebook className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                    </Link>
                    <Link
                      href={"/"}
                      title="Undugu Mentorship Initiative on Twitter"
                    >
                      <BsTwitter className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                    </Link>
                    <Link
                      href={"/"}
                      title="Undugu Mentorship Initiative on Instagram"
                    >
                      <BsInstagram className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                    </Link>
                  </div>
                </div>
                <div className="absolute hidden  group-hover:block inset-x-0 ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
              </div>
            ))
          }
        </div>
      </div>

      {/* center */}
      <div className="flex flex-col">
        <div className="flex flex-col gap-10 pt-3">
          {
            [...upcomingEvents].slice(0, 2)?.map((event: any, idx: number) => (
              <div key={idx} className="relative flex flex-col cursor-pointer">
                <Image
                  src={urlForImage(event?.mainImage).url()}
                  alt=""
                  height={350}
                  width={600}
                  className="object-cover "
                  sizes="100vw"
                />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col p-4 text-left transition-all duration-200 ease-in-out bg-gradient-to-t from-primary">
                  <p className="text-white text-[1rem] leading-[1.1rem] font-[700]">
                    {event?.title} at {event?.location}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col mt-4 ">
        <h1
          className="text-primary whitespace-nowrap text-[1.3rem] font-[700] opacity-90 flex
              items-center gap-3 before:content-[''] before:h-1 before:w-full
              before:bg-primary before:block after:content-['']
              after:h-1 after:w-full after:bg-primary after:block"
        >
          Past Events
        </h1>
        <p className="text-[1.0rem] text-primary leading-[1.2rem] tracking-wide my-3 font-semibold">
          See Our Past Mentoring Events In Different Schools
        </p>
        <FacebookPost />
        <div className="grid w-full grid-cols-1 gap-6 py-5 sm:grid-cols-1 md:grid-cols-2 xl:flex xl:flex-col">
          {
            pastEvents?.map((event: any, idx: number) => (
              <div key={idx} className="relative flex gap-3 pb-3 shadow-sm cursor-pointer group">
                <Image
                  src={urlForImage(event?.mainImage).url()}
                  alt=""
                  height={150}
                  width={200}
                  className="rounded-sm"
                />
                <div className="flex flex-col items-start justify-between gap-3 mt-3 w-52">
                  <p className="text-primary text-[0.8rem] leading-[0.9rem] tracking-normal font-[500]">
                    {event?.title}
                  </p>
                  <div className="flex flex-row gap-4 ">
                    <Link
                      legacyBehavior
                      href={"https://www.facebook.com/UnduguMentorship"}
                      title="Undugu Mentorship Initiative on Facebook"
                    >
                      <SiFacebook className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                    </Link>
                    <Link
                      href={"/"}
                      title="Undugu Mentorship Initiative on Twitter"
                    >
                      <BsTwitter className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                    </Link>
                    <Link
                      href={"/"}
                      title="Undugu Mentorship Initiative on Instagram"
                    >
                      <BsInstagram className="w-5 h-5 text-primary cursor-pointer hover:text-[#ff6100] hover:transition-all text-center  " />
                    </Link>
                  </div>
                </div>
                <div className="absolute hidden  group-hover:block inset-x-0 ease-in-out duration-700 bg-blue bottom-0 h-[2px]"></div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Page;
