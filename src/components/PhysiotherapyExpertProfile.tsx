import { Img } from "./Img";
import { Text } from "./Text";
import { Heading } from "./Heading";import React from "react";

interface Props {
  className?: string;
  profileImage?: string;
  expertName?: React.ReactNode;
  expertDescription?: React.ReactNode;
  prop?: React.ReactNode;
  alternateExpertName?: React.ReactNode;
  alternateExpertDescription?: React.ReactNode;
  one?: React.ReactNode;
}

export default function PhysiotherapyExpertProfile({
  profileImage = "images/img_frame_2.png",
  expertName = "Dr. Abinash Biswaranjan Mohapatra",
  expertDescription = "Dr. Abinash is a highly experienced physiotherapy expert dedicated to helping individuals recover, strengthen, and enhance mobility through",
  prop = "",
  alternateExpertName = "Dhamendra Singh",
  alternateExpertDescription = "With 15 years of experience in physiotherapy, Dharmendra Singh specializes in rehabilitation, pain management, and mobility enhancement",
  one = "",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col self-stretch flex-1 container-sm`}>
      <div className="self-stretch py-[22px] sm:py-5">
        <div className="px-1">
          <div className="flex items-center justify-between gap-5 md:flex-col">
            <Img
              src={profileImage}
              alt="Image"
              className="ml-3 h-[300px] w-[24%] rounded-[100px] object-contain md:ml-0 md:w-full"
            />
            <div className="flex w-[68%] flex-col items-start gap-7 md:w-full">
              <Heading
                size="headingxs"
                as="h4"
                className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
              >
                {expertName}
              </Heading>
              <Text
                size="textmd"
                as="p"
                className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
              >
                {expertDescription}
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3.5 flex w-full flex-col items-center">
        <Text
          size="textxl"
          as="p"
          className="rotate-[-180deg] text-[44px] font-light !text-gray-500_3d md:text-[40px] sm:text-[34px]"
        >
          {prop}
        </Text>
      </div>
      <div className="mt-12 self-stretch">
        <div>
          <div className="mb-[42px] px-1">
            <div className="flex items-start justify-between gap-5 md:flex-col">
              <Img
                src="images/img_frame_2_300x272.png"
                alt="Image"
                className="ml-1.5 h-[300px] w-[24%] self-center rounded-[100px] object-contain md:ml-0 md:w-full"
              />
              <div className="mt-5 flex w-[68%] flex-col items-start gap-[22px] md:w-full">
                <Heading
                  size="headingxs"
                  as="h4"
                  className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                >
                  {alternateExpertName}
                </Heading>
                <Text
                  size="textmd"
                  as="p"
                  className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                >
                  {alternateExpertDescription}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-[-10px] flex flex-col items-center">
        <Text
          size="textxl"
          as="p"
          className="rotate-[-180deg] text-[44px] font-light !text-gray-500_3d md:text-[40px] sm:text-[34px]"
        >
          {one}
        </Text>
      </div>
    </div>
  );
}