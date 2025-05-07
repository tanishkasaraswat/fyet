import { Heading } from "./Heading";
import { Img } from "./Img";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userName?: React.ReactNode;
}

export default function UserProfile1({
  userImage = "images/img_sozuifjbtqqvf5x_300x264.png",
  userName = "Aditya Dhangar",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col md:w-full md:px-5 bg-fyet_framer_website-white shadow-xs rounded-[20px]`}
    >
      <div className="self-stretch rounded-tl-[20px] rounded-tr-[20px]">
        <Img
          src={userImage}
          alt="sozuifjbtqqvf5x"
          className="h-[300px] w-full rounded-tl-[20px] rounded-tr-[20px] object-cover"
        />
      </div>
      <div className="relative mt-[-18px] flex justify-end self-stretch bg-fyet_framer_website-mercury px-10 py-2.5 shadow-sm sm:px-5">
        <Heading
          size="fyet_framer_website_semantic_heading_3"
          as="h5"
          className="font-inter text-[20px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black"
        >
          {userName}
        </Heading>
      </div>
    </div>
  );
}