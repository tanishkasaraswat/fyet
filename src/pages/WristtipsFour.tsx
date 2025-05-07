import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../components";
import Footer1 from "../components/Footer1";
import Header1 from "../components/Header1";

export default function WristtipsFourPage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
        <Header1 />
        <div className="flex flex-col gap-[262px] sm:gap-[196px] md:gap-[131px]">
        <div className="flex h-[580px] items-start justify-center self-stretch bg-[url(/public/images/tips-page.jpg)] bg-cover bg-no-repeat py-[140px] md:h-auto md:py-5">
        <div className="container-xs mb-16 flex justify-center px-14 md:px-5">
              <div className="flex w-[242] flex-col items-end md:w-full">
                <div className="flex flex-col items-end self-stretch">
                  <Heading as="h1" className="mr-[26px] text-[64px] font-semibold md:mr-0 md:text-[48px]">
                    Wrist
                  </Heading>
                  <Heading as="h2" className="relative mt-[-10px] text-[64px] font-semibold md:text-[48px]">
                    Related
                  </Heading>
                </div>
                <Heading as="h3" className="mr-[46px] text-[64px] font-semibold md:mr-0 md:text-[48px]">
                  Tips
                </Heading>
              </div>
            </div>
          </div>
          <div className="mx-[74px] flex justify-center rounded-[50px] bg-fyet_framer_website-white py-[102px] md:mx-0 md:py-5">
            <div className="container-xs mb-1 flex justify-center px-11 md:px-5">
              <Text
                as="p"
                className="w-full text-justify text-[48px] font-normal leading-[50px] tracking-[-0.50px] md:text-[44px] sm:text-[38px]"
              >
                Aloe Vera is a juicy plant popular for its health benefits. Aloe Vera has anti-inflammatory and anti-arthritic properties.
              </Text>
            </div>
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
}