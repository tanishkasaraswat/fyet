import { Helmet } from "react-helmet";
import { Text, Heading } from "../components";
import Footer1 from "../components/Footer1";
import Header1 from "../components/Header1";
import React from "react";

export default function WristtipsOnePage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
        <Header1 />
        <div>
          <div className="flex h-[580px] items-start justify-center self-stretch bg-[url(/public/images/tips-page.jpg)] bg-cover bg-no-repeat py-[140px] md:h-auto md:py-5">
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
          <div className="mx-[74px] rounded-[50px] bg-fyet_framer_website-white px-[54px] py-[138px] md:mx-0 md:p-5">
            <Text
              as="p"
              className="mt-4 text-justify text-[48px] font-normal leading-[50px] tracking-[-0.50px] md:text-[44px] sm:text-[38px]"
            >
              Pineapple helps to reduce swelling in addition, coconut, cherries and blueberries contain large amounts of antioxidants to fight inflammation.
            </Text>
          </div>
        </div>
        <Footer1 />
    </>
  );
}