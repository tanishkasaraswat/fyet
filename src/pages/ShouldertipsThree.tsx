import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../components";
import Footer1 from "../components/Footer1";
import Header1 from "../components/Header1";

export default function ShoulderTipsFourPage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
        <Header1 />
        <div className="mt-2 flex flex-col gap-[258px] md:gap-[193px] sm:gap-[129px]">
        <div className="flex h-[580px] items-start justify-center self-stretch bg-[url(/public/images/tips-page.jpg)] bg-cover bg-no-repeat py-[140px] md:h-auto md:py-5">
            <div className="container-xs mb-[58px] flex flex-col items-end pl-14 pr-[442px] md:px-5">
              <Heading size="headings" as="h1" className="text-[48px] font-semibold md:text-[44px] sm:text-[38px]">
                Shoulder
              </Heading>
              <Heading
                size="headings"
                as="h2"
                className="mr-5 text-[48px] font-semibold md:mr-0 md:text-[44px] sm:text-[38px]"
              >
                Related
              </Heading>
              <Heading
                size="headings"
                as="h3"
                className="mr-[54px] text-[48px] font-semibold md:mr-0 md:text-[44px] sm:text-[38px]"
              >
                Tips
              </Heading>
            </div>
          </div>
        </div>
        <div className="ml-[78px] mr-[70px] rounded-[50px] bg-fyet_framer_website-white px-[54px] py-[88px] md:mx-0 md:p-5">
          <Text
            as="p"
            className="mt-4 text-justify text-[48px] font-normal leading-[50px] tracking-[-0.50px] md:text-[44px] sm:text-[38px]"
          >
            Watermelon is sweet, hydrating, and loaded with nutrients what&#39;s more, eating watermelon or sipping on
            watermelon juice could be a good way to promote muscle recovery after exercise.
          </Text>
        </div>
        <Footer1 />
      </div>
    </>
  );
}