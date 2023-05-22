"use client";

import Image from "next/image";
import { Carousel } from "flowbite-react";

import image_one from "../public/home-page-photo.jpg";
import image_four from "../public/Taru_boys.jpg";

function CarouselPage() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div>
          <Image src={image_one} alt="image" width={500} />
          <p className="legend">
            Mentorship Session At Mwangeka Girls Wundanyi.
          </p>
        </div>
        <div>
          <Image src={image_four} alt="image" width={500} />
          <p className="legend">Mentorship Session At Taru Boys Voi.</p>
        </div>
        <div>
          <Image src={image_one} alt="image" width={500} />
          <p className="legend">
            Mentorship Session At Mwangeka Girls Wundanyi.
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
