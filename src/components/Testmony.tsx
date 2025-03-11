import Image from "next/image";
import { urlForImage } from "../lib/sanity-image";

export const Testimony = ({ testimonial, clamped = true }: { testimonial: Testimonial, clamped?: boolean }) => {
  console.log(testimonial)
  return (
    <div className="relative w-full p-2 bg-white lg:w-96 hover:transition hover:duration-700 hover:ease-in-out flex flex-col items-center justify-center">
      <Image
        src={testimonial?.userAvatar ? urlForImage(testimonial.userAvatar).url() : ""}
        alt="Beneficiary"
        width={64}
        height={64}
        className="!h-16 !w-16 rounded-full absolute top-0 right-[40%]  "
      />
      <div className="shadow-lg mt-5 border-t-2 border-t-[#239492] flex flex-col items-center justify-center px-3 py-5 ">
        <div className="mt-8">
          <h2 className="text-[1.1rem] text-center text-primary font-[400]">
            {testimonial?.userName}
          </h2>
          <p className="text-[0.9rem] text-center text-slate-600">{testimonial?.userOccupation}</p>
        </div>

        <p className={`text-[14px] px-1 leading-6 text-center flex-1 mt-2 ${clamped && "line-clamp-4"} `}>
          {testimonial?.description}
        </p>
      </div>
    </div>
  );
};
