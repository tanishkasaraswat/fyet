import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../components";
import Footer1 from "../components/Footer1";
import Header1 from "../components/Header1";
import React from "react";

export default function DietitiansPage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
        <Header1 />
        <div>
          <Header1 />
          <div className="flex h-[580px] items-start justify-center bg-[url(/public/images/home.jpg)] bg-cover bg-no-repeat py-[188px] md:h-auto md:py-5">
            <div className="container-xs mb-[52px] flex justify-center px-14 md:px-5">
              <Heading 
                size="fyet_framer_website_frankruhl_light_semibold" 
                as="h1" 
                className="text-[115px] font-semibold md:text-[48px]"
              >
                Dietitians
              </Heading>
            </div>
          </div>
        </div>
  
        <div className="mt-12 flex flex-col items-center self-stretch">
          <div className="flex justify-center self-stretch py-[22px] sm:py-5">
            <div className="container-xs flex justify-center px-1 md:px-5">
              <div className="flex w-full items-start justify-between gap-5 md:flex-col">
                <Img 
                  src="images/diksha.jpg" 
                  alt="image" 
                  className="ml-3 h-[300px] w-[24%] self-center rounded-[100px] object-contain md:ml-0 md:w-full" 
                />
                <div className="mt-2.5 flex w-[68%] flex-col items-start gap-[30px] md:w-full">
                  <Heading 
                    size="headingxs" 
                    as="h2" 
                    className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                  >
                    Diksha Meena
                  </Heading>
                  <Text 
                    size="textmd" 
                    as="p" 
                    className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                  >
                    A highly experienced dietitian with 12 years of expertise in nutrition planning, balanced diets, and lifestyle management. She specializes in creating personalized diet plans that promote overall health, enhance energy levels, and support fitness goals. Her approach integrates scientific nutrition principles with practical meal strategies, ensuring sustainable and long-term well-being for individuals across different lifestyles and dietary needs.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5">
          <Text 
            size="textxl" 
            as="p" 
            className="rotate-[-180deg] text-[44px] font-light !text-gray-500_3d md:text-[40px] sm:text-[34px]"
          >
            ____________________________
          </Text>
        </div>
        <div className="mt-12 flex flex-col items-center self-stretch py-[22px] sm:py-5">
          <div className="container-xs mb-[42px] flex justify-center px-2.5 md:px-5">
            <div className="flex w-full items-center justify-between gap-5 md:flex-col">
              <Img 
                src="images/anshika.jpg" 
                alt="image" 
                className="ml-1.5 h-[300px] w-[24%] self-center rounded-[100px] object-contain md:ml-0 md:w-full" 
              />
              <div className="mt-5 flex w-[68%] flex-col items-start gap-[22px] md:w-full">
                <Heading 
                  size="headingxs" 
                  as="h3" 
                  className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                >
                  Anshika Saraswat
                </Heading>
                <Text 
                  size="textmd" 
                  as="p" 
                  className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                >
                  A dedicated dietitian with expertise in nutrition planning, dietary management, and holistic wellness. She focuses on personalized meal plans that cater to individual health goals, including weight management, improved metabolism, and overall well-being. With a strong emphasis on balanced nutrition and mindful eating, she helps individuals develop sustainable and healthy eating habits for long-term benefits.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs relative mt-[-10px] flex flex-col items-center md:px-5">
          <Text 
            size="textxl" 
            as="p" 
            className="rotate-[-180deg] text-[44px] font-light !text-gray-500_3d md:text-[40px] sm:text-[34px]"
          >
            ____________________________
          </Text>
        </div>
        <div className="mt-12 flex flex-col items-center self-stretch py-[22px] sm:py-5">
          <div className="container-xs mb-[42px] flex justify-center px-2.5 md:px-5">
            <div className="flex w-full items-center justify-between gap-5 md:flex-col">
              <Img 
                src="images/mohit.jpg" 
                alt="image" 
                className="ml-1.5 h-[300px] w-[24%] self-center rounded-[100px] object-contain md:ml-0 md:w-full" 
              />
              <div className="mt-5 flex w-[68%] flex-col items-start gap-[22px] md:w-full">
                <Heading 
                  size="headingxs" 
                  as="h3" 
                  className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                >
                  Mohit Sharma
                </Heading>
                <Text 
                  size="textmd" 
                  as="p" 
                  className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                >
                  A skilled dietitian specializing in personalized nutrition, balanced meal planning, and lifestyle-based dietary management. He focuses on helping individuals achieve their health goals through scientifically backed diet strategies, whether for weight management, improved digestion, or overall wellness. His approach emphasizes practical and sustainable eating habits, ensuring long-term health benefits tailored to each person’s unique needs.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs mt-2 flex flex-col items-center md:px-5">
          <Text 
            size="textxl" 
            as="p" 
            className="rotate-[-180deg] text-[44px] font-light !text-gray-500_3d md:text-[40px] sm:text-[34px]"
          >
            ____________________________
          </Text>
        </div>
        <div className="mt-[26px] flex justify-center self-stretch py-[22px] sm:py-5">
          <div className="container-xs flex justify-center px-2.5 md:px-5">
            <div className="flex w-full items-center justify-between gap-5 md:flex-col">
              <Img 
                src="images/riya jaiswal.jpg" 
                alt="image" 
                className="h-[300px] w-[24%] self-center rounded-[100px] object-contain md:w-full" 
              />
              <div className="mt-[22px] flex w-[68%] flex-col items-start gap-6 md:w-full">
                <Heading 
                  size="headingxs" 
                  as="h5" 
                  className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                >
                  Riya Jaiswal
                </Heading>
                <Text 
                  size="textmd" 
                  as="p" 
                  className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                >
                  A dedicated dietitian specializing in holistic nutrition, meal planning, and dietary wellness. She focuses on creating personalized diet plans that promote overall health, boost metabolism, and support fitness goals. With a strong emphasis on balanced nutrition and sustainable eating habits, she helps individuals make informed food choices for long-term well-being.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <Footer1 />
      </div>
    </>
  );
}