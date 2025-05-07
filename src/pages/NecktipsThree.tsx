import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../components";
import { Header1, Footer1 } from "../components";

export default function NecktipsOnePage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
        <Header1 />
        <div className="flex flex-col gap-[218px] md:gap-[163px] sm:gap-[109px]">
        <div className="flex h-[580px] items-start justify-center self-stretch bg-[url(/public/images/tips-page.jpg)] bg-cover bg-no-repeat py-[140px] md:h-auto md:py-5">
        <div className="container-xs mb-16 flex justify-center px-14 md:px-5">
              <div className="flex w-[222] flex-col items-end md:w-full">
                <div className="flex flex-col items-end self-stretch">
                  <Heading as="h1" className="mr-8 text-[64px] font-semibold md:mr-0 md:text-[48px]">
                    Neck
                  </Heading>
                  <Heading as="h2" className="relative mt-[-8px] text-[64px] font-semibold md:text-[48px]">
                    Related
                    </Heading>
                </div>
                <Heading as="h3" className="mr-[46px] text-[64px] font-semibold md:mr-0 md:text-[48px]">
                  Tips
                </Heading>
              </div>
            </div>
          </div>
      <div className="mx-[74px] flex justify-center rounded-[50px] bg-fyet_framer_website-white py-[140px] md:mx-0 md:py-5">
        <div className="container-xs mb-1 flex justify-center px-11 md:px-5">
          <Text
            as="p"
            className="w-full text-justify text-[48px] font-normal leading-[50px] tracking-[-0.50px] md:text-[44px] sm:text-[38px]"
          >
            Stand and Sit Up Straight to protect joints from your neck down to your knees. a walk can improve your posture, too. the faster you go, the harder your muscles work to keep you upright.        
      </Text>
      </div>
      </div>
      </div>
      <Footer1 />
      </div>
    </>
  );
}