import { Helmet } from "react-helmet";
import { Text, Heading } from "../components";
import Footer1 from "../components/Footer1";
import Header1 from "../components/Header1";
import UserProfile2 from "../components/UserProfile2";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";

const data = [
  { userImage: "images/tips.jpg", headingText: "General Tips", linkTo: "/GeneralTips1" },
  { userImage: "images/neck.jpg", headingText: "Neck Related Tips", linkTo: "/NeckTips1" },
  { userImage: "images/knee.jpg", headingText: "Knee Related Tips", linkTo: "/KneeTips1" },
  { userImage: "images/shoulder.jpg", headingText: "Shoulder Related Tips", linkTo: "/Shouldertips" },
  { userImage: "images/wrist.jpg", headingText: "Wrist Related Tips", linkTo: "/WristTips1" },
  { userImage: "images/ankle.jpg", headingText: "Ankle Related Tips", linkTo: "/AnkleTips1" },
];

export default function TipsPage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
        <div>
          <Header1 />
          <div className="flex h-[580px] items-start justify-center bg-[url(/public/images/tips-page.jpg)] bg-cover bg-no-repeat py-[188px] md:h-auto md:py-5">
            <div className="container-xs mb-[52px] flex justify-center px-14 md:px-5">
              <Heading 
                size="fyet_framer_website_frankruhl_light_semibold" 
                as="h1" 
                className="text-[115px] font-semibold md:text-[48px]"
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
        <div className="container-xs flex flex-col items-center gap-[72px] px-1.5 md:gap-[54px] md:px-5 sm:gap-9">
          <Text
            size="text3xl"
            as="p"
            className="!font-dmsans text-[72px] font-normal !text-fyet_framer_website-tamarind md:text-[48px]"
          >
            Looking for some...
          </Text>
          <div className="ml-8 flex flex-col items-center gap-[78px] self-stretch md:ml-0 md:gap-[58px] sm:gap-[39px]">
            <div className="grid grid-cols-3 justify-center gap-[134px] gap-y-20 self-stretch md:grid-cols-2 sm:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <Link
                    to={d.linkTo} 
                    key={"members" + index}                >
                  
                    <UserProfile2 {...d} key={"tips" + index} />
                    </Link>
                  ))}
                </Suspense>
            </div>
            <Text
              size="text3xl"
              as="p"
              className="!font-dmsans text-[72px] font-normal !text-fyet_framer_website-gamboge md:text-[48px]"
            >
              WE GOT YOU !!
            </Text>
          </div>
        </div>
      </div>
      <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
      <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
      <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
      <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
      <Footer1 />
    </>
  );
}