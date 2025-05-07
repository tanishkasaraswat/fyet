import { Heading } from "./Heading";
import { Img } from "./Img";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  headingText?: React.ReactNode;
}

export default function UserProfile2({
  userImage = "images/img_sozuifjbtqqvf5x_6.png",
  headingText = "General Tips",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full bg-fyet_framer_website-white shadow-xs rounded-[20px]`}
    >
      <div className="self-stretch rounded-tl-[20px] rounded-tr-[20px]">
        <Img
          src={userImage}
          alt="sozuifjbtqqvf5x"
          className="h-[298px] w-full rounded-tl-[20px] rounded-tr-[20px] object-cover"
        />
      </div>
      <div className="relative mt-[-16px] flex justify-center self-stretch border border-solid border-fyet_framer_website-black bg-fyet_framer_website-mercury p-2.5 shadow-sm">        <Heading
          size="fyet_framer_website_semantic_heading_3"
          as="h5"
          className="font-inter text-[20px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black"
        >
          {headingText}
        </Heading>
      </div>
    </div>
  );
}