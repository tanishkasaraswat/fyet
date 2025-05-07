import { Img } from "./Img";
import { Button } from "./Button";    
import { Heading } from "./Heading";
import React from "react";

interface Props {
  className?: string;
  yogaImage?: string;
  headingText?: React.ReactNode;
  introText?: React.ReactNode;
  firstText?: React.ReactNode;
  secondText?: React.ReactNode;
  readMoreButtonText?: string;
  readMoreButton?: React.ReactElement;
}

export default function YogaProfile1({
  yogaImage = "images/yoga-home.jpg",
  headingText = "Yoga",
  introText = "Balance your daily life with ",
  firstText = "Yoga asans.",
  secondText = "",
  readMoreButtonText = "Read More",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[32%] md:w-full bg-fyet_framer_website-white shadow-xs rounded-[20px]`}
    >
      <div className="self-stretch rounded-tl-[20px] rounded-tr-[20px]">
        <Img src={yogaImage} alt="Yoga" className="h-[238px] w-full rounded-tl-[20px] rounded-tr-[20px] object-cover" />
      </div>
      <div className="flex flex-col items-start justify-center self-stretch bg-fyet_framer_website-mercury px-4 py-[30px] shadow-sm sm:py-5">
        <Heading
          size="fyet_framer_website_semantic_heading_3"
          as="h5"
          className="!font-inter text-[20px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black"
        >
          {headingText}
        </Heading>
        <Heading
          size="fyet_framer_website_inter_medium"
          as="p"
          className="!text-fyet_framer_website-cod_gray-0 mt-6 !font-inter text-[20px] font-medium"
        >
          {introText}
        </Heading>
        <Heading
          size="fyet_framer_website_inter_medium"
          as="p"
          className="!text-fyet_framer_website-cod_gray-0 mt-2 !font-inter text-[20px] font-medium"
        >
          {firstText}
        </Heading>
        <Heading
          size="fyet_framer_website_inter_medium"
          as="p"
          className="!text-fyet_framer_website-cod_gray-0 mt-2 !font-inter text-[20px] font-medium"
        >
          {secondText}
        </Heading>
        <Button
          color="fyet.framer.website_mine_shaft"
          size="sm"
          shape="round"
          className="mt-11 min-w-[102px] rounded-lg px-3 font-inter font-semibold"
        >
          {readMoreButtonText}
        </Button>
      </div>
    </div>
  );
}