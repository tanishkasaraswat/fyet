import { Helmet } from "react-helmet";
import { Text, Heading } from "../components";
import { Footer1, Header1 } from "../components";
import React from "react";

export default function WristitpsTwoPage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
        <Header1 />
        <div className="flex flex-col gap-[230px] md:gap-[172px] sm:gap-[115px]">
        <div className="flex h-[580px] items-start justify-center self-stretch bg-[url(/public/images/tips-page.jpg)] bg-cover bg-no-repeat py-[140px] md:h-auto md:py-5">
        <div className="container-xs mb-16 flex justify-center px-14 md:px-5">
              <div className="flex w-[24%] flex-col items-end md:w-full">
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
        </div>
        <div className="mx-[74px] rounded-[50px] bg-fyet_framer_website-white px-[54px] py-[78px] md:mx-0 md:p-5">
          <Text
            as="p"
            className="mt-3.5 text-justify text-[48px] font-normal leading-[50px] tracking-[-0.50px] md:text-[44px] sm:text-[38px]"
          >
            Flexibility helps you move better. Try to stretch daily or at least three times a week. But do not do it
            when your muscles are cold. Do a light warm-up first, like walking for 10 minutes, to loosen up the
            joints, ligaments, and tendons around them.
          </Text>
        </div>
      </div>
      <Footer1 />
    </>
  );
}