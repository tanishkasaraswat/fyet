import { Helmet } from "react-helmet";
import { Text, Heading } from "../components"; 
import { Footer1, Header1 } from "../components";
import React from "react";

export default function GeneraltipsFourPage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
        <Header1 />
        <div className="flex flex-col gap-[260px] md:gap-[195px] sm:gap-[130px]">
          <div className="flex h-[580px] flex-col items-center justify-center bg-[url(/public/images/tips-page.jpg)] bg-cover bg-no-repeat py-48 md:h-auto md:py-5">
            <div className="container-xs mb-[34px] flex flex-col items-end pl-14 pr-[430px] md:px-5">
              <Heading as="h1" className="text-[64px] font-semibold md:text-[48px]">
                General
              </Heading>
              <Heading as="h2" className="mr-[54px] text-[64px] font-semibold md:mr-0 md:text-[48px]">
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
            Spinach is one of the most power foods to increase haemoglobin levels. spinach is packed with iron,
            calcium, vitamins a, b9, e and c and fiber which are crucial to help your body increase its haemoglobin
            levels and prevent anaemia.
          </Text>
        </div>
        <Footer1 />
      </div>
    </>
  );
}