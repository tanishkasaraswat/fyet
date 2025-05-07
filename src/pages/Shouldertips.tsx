import React from "react";
import { Helmet } from "react-helmet";
import { Heading } from "../components";
import Footer1 from "../components/Footer1";
import Header1 from "../components/Header1";
import UserProfile2 from "../components/UserProfile2";
import { Suspense } from "react";
import { Link } from "react-router-dom";

const data = [
  { userImage: "images/ashwagandha.jpg", headingText: "Ashwagandha", linkTo: "/shouldertips1" },
  { userImage: "images/turmeric.jpg", headingText: "Turmeric", linkTo: "/shouldertipsFour" },
  { userImage: "images/brocolli-caulifower.jpg", headingText: "Broccoli & Cauliflower", linkTo: "/shouldertipsOne" },
  { userImage: "images/watermelon.jpg", headingText: "Watermelon", linkTo: "/shouldertipsThree" },
  { userImage: "images/oregano.jpg", headingText: "Oregano", linkTo: "/shouldertipsTwo" },
];

export default function ShoulderTipsPage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
        <Header1 />
        <div className="mt-2 flex flex-col gap-[212px] md:gap-[159px] sm:gap-[106px]">
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
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs px-1.5 md:px-5">
          <div className="ml-8 grid grid-cols-3 justify-center gap-[134px] gap-y-[108px] md:ml-0 md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <Link
                  to={d.linkTo} 
                  key={"members" + index}                >
                
                  <UserProfile2 {...d} key={"shouldertips" + index} />
                  </Link>
                ))}
              </Suspense>
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