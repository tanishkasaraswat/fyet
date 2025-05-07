import { Text } from "./Text";
import { Heading } from "./Heading";
import { Img } from "./Img";
import React from "react";

interface Props {
  className?: string;
  firstDietitianImage?: string;
  firstDietitianName?: string;
  firstDietitianDescription?: string;
  prop?: React.ReactNode;
  secondDietitianName?: string;
  secondDietitianDescription?: string;
  one?: React.ReactNode;
}

export default function DietitianProfileList({
  firstDietitianImage = "images/diksha.jpg",
  firstDietitianName = "Diksha Meena",
  firstDietitianDescription = "A highly experienced dietitian with 12 years of expertise in nutrition planning, balanced diets, and lifestyle management.",
  prop ="_________________________________________________________",
  secondDietitianName = "Anshika Saraswat",
  secondDietitianDescription = "A dedicated dietitian with expertise in nutrition planning, dietary management, and holistic wellness.",
  one = "_________________________________________________________",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col self-stretch flex-1 container-sm`}>
      <div className="self-stretch py-[22px] sm:py-5">
        <div className="flex items-start justify-between gap-5 md:flex-col">
          <Img
            src={firstDietitianImage}
            alt="Image"
            className="ml-3 h-[300px] w-[24%] self-center rounded-[100px] object-contain md:ml-0 md:w-full"
          />
          <div className="mt-2.5 flex w-[68%] flex-col items-start gap-[22px] md:w-full">
            <div className="self-stretch">
              <Heading as="h4" className="font-inter text-[25px] font-semibold tracking-[-0.50px] text-fyet_framer_website-black md:text-[23px] sm:text-[21px]">
                {firstDietitianName}
              </Heading>
              <Text as="p" className="mt-2 text-justify text-[18px] leading-[27px] tracking-[-0.50px] md:text-[17px] sm:text-[16px]">
                {firstDietitianDescription}
              </Text>
            </div>
            {prop && (
              <div className="mt-3.5 flex w-full flex-col items-center">
                <Text
                  size="textxl"
                  as="p"
                  className="rotate-[-180deg] text-[44px] font-light !text-gray-500_3d md:text-[40px] sm:text-[34px]"
                >
                  {prop}
                </Text>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 self-stretch">
          <div className="mb-[42px] px-1">
            <div className="flex items-start justify-between gap-5 md:flex-col">
              <Img
                src="images/anshika.jpg"
                alt="Image"
                className="ml-1.5 h-[300px] w-[24%] self-center rounded-[100px] object-contain md:ml-0 md:w-full"
              />
              <div className="mt-[18px] flex w-[68%] flex-col items-start gap-6 md:w-full">
                <Heading
                  size="headingxs"
                  as="h4"
                  className="font-inter text-[25px] font-semibold tracking-[-0.50px] text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                >
                  {secondDietitianName}
                </Heading>
                <Text
                  size="textmd"
                  as="p"
                  className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                >
                  {secondDietitianDescription}
                </Text>
              </div>
            </div>
          </div>
        </div>

        {one && (
          <div className="relative mt-[-10px] flex flex-col items-center">
            <Text
              size="textxl"
              as="p"
              className="rotate-[-180deg] text-[44px] font-light !text-gray-500_3d md:text-[40px] sm:text-[34px]"
            >
              {one}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
}
