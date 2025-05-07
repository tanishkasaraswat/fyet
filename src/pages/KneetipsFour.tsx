// KneetipsFourPage.tsx
import { Helmet } from "react-helmet";
import { Text, Heading } from "../components";
import { Header1, Footer1 } from "../components";
import React from "react";

export default function KneetipsFourPage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
      <Header1 />
      <div className="flex flex-col gap-[220px] md:gap-[165px] sm:gap-[110px]">
        <div className="flex h-[580px] flex-col items-center justify-center bg-[url(/public/images/img_tips.png)] bg-cover bg-no-repeat py-[166px] md:h-auto md:py-5">
          <div className="container-xs mb-[62px] flex flex-col items-end pl-14 pr-[462px] md:px-5">
            <Heading
              size="headings"
              as="h1"
              className="mr-6 text-[48px] font-semibold md:mr-0 md:text-[44px] sm:text-[38px]"
            >
              Knee
            </Heading>
        <Heading
          size="headings"
          as="h2"
          className="relative mt-[-2px] text-[48px] font-semibold md:text-[44px] sm:text-[38px]"
        >
          Related
        </Heading>
        <Heading
          size="headings"
          as="h3"
          className="mr-[34px] text-[48px] font-semibold md:mr-0 md:text-[44px] sm:text-[38px]"
        >
          Tips
        </Heading>
      </div>
      </div>
      <div className="mx-[74px] rounded-[50px] bg-fyet_framer_website-white px-[54px] py-[138px] md:mx-0 md:p-5">
          <Text
              as="p"
              className="mt-4 text-justify text-[48px] font-normal leading-[50px] tracking-[-0.50px] md:text-[44px] sm:text-[38px]"
          >
            <span>Some antioxidants, found in fruits and veggies like&nbsp;</span>
            <span className="font-bold">Apples, Onions,&nbsp;</span>
            <span>and</span>
            <span className="font-bold">
              &nbsp;Strawberries, helps to reduce joint inflammation, pain and protect your cells from damage.
            </span>
          </Text>
        </div>
    </div>
    <Footer1 />
    </div>
    </>
    );
}