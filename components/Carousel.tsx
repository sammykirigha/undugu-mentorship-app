"use client";

import  Image  from "next/image";
import { Carousel } from "react-responsive-carousel";

import image_one from "../public/home-page-photo.jpg";
import image_four from "../public/Taru_boys.jpg";

function CarouselPage(){
    return (
        <div className="  w-full lg:w-[60vw] ">
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
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
    )
}

export default CarouselPage;