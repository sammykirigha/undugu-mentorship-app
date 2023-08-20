import Image from "next/image";
import image from "../../public/Our_MP.jpg";

export const Testimony = () => {
  return (
    <div className="relative w-full bg-white lg:w-96 flex flex-col items-center justify-center">
      <Image
        src={image}
        alt=""
        className="h-16 w-16 rounded-full absolute top-0 right-[40%]  "
      />
      <div className="shadow-lg mt-5 border-t-2 border-t-slate-900 flex flex-col items-center justify-center px-3 py-5 ">
        <div className="mt-8">
          <h2 className="text-[1.1rem] text-primary font-[400]">
            Samuel Kirigha
          </h2>
          <p className="text-[0.9rem] text-slate-600">Software Engineer</p>
        </div>
        <div
          className="h-44
        overflow-auto scrollbar scrollbar-thumb-slate-300 scrollbar-w-1
        scrollbar-track-white scrollbar-thumb-rounded-lg  mt-5"
        >
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus
            laborum quis fugit quasi vero ad placeat tempora repudiandae libero
            nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            laborum quis fugit quasi vero ad placeat tempora repudiandae libero
            nam.
          </p>
        </div>
      </div>
    </div>
  );
};
