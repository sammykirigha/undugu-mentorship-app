import Image from "next/image";
import image from "../public/home-page-photo.jpg";

export default function Home() {
  return (
    <div className=" flex w-full mt-[95px] max-w-[1400px] mx-auto">
      <div className="flex mt-12 gap-10">
        <div className="">
          <Image
            src={image}
            alt="hero image"
            width={800}
            className="object-cover  "
          />
        </div>

        <div className="w-[400px]">
          <div>
            <h1>Our Vission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              recusandae iusto veritatis corporis a cupiditate laborum ad
              officia, laboriosam quod suscipit facere harum minima
              exercitationem facilis velit corrupti ipsum ducimus hic voluptatem
              deleniti, quasi labore. Laboriosam cupiditate dolores iusto
              obcaecati.
            </p>
          </div>
          <div>
            <h1>Our Vission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              recusandae iusto veritatis corporis a cupiditate laborum ad
              officia, laboriosam quod suscipit facere harum minima
              exercitationem facilis velit corrupti ipsum ducimus hic voluptatem
              deleniti, quasi labore. Laboriosam cupiditate dolores iusto
              obcaecati.
            </p>
          </div>
          <div>
            <h1>Our Vission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              recusandae iusto veritatis corporis a cupiditate laborum ad
              officia, laboriosam quod suscipit facere harum minima
              exercitationem facilis velit corrupti ipsum ducimus hic voluptatem
              deleniti, quasi labore. Laboriosam cupiditate dolores iusto
              obcaecati.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
