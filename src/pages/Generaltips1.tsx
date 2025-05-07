import { Helmet } from "react-helmet";
import { Heading } from "../components";
import { Footer1, Header1 } from "../components";
import UserProfile2 from "../components/UserProfile2";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";

const data = [
  { userImage: "images/green-tea.jpg", headingText: "Green Tea", linkTo: "/GeneraltipsThree" },
  { userImage: "images/spinach.jpg", headingText: "Spinach", linkTo: "/GeneraltipsFour" },
  { userImage: "images/aloevera.jpg", headingText: "Aloe Vera", linkTo: "/Generaltips" },
  { userImage: "images/amla.jpg", headingText: "Amla", linkTo: "/GeneraltipsTwo" },
  { userImage: "images/drumstick.jpg", headingText: "DrumStick Leaves", linkTo: "/GeneraltipsOne" },
];

export default function Generaltips1Page() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
        <Header1 />
        <div className="flex flex-col items-center gap-[108px] md:gap-[81px] sm:gap-[54px]">
          <div className="flex h-[580px] flex-col items-center justify-center self-stretch bg-[url(/public/images/tips-page.jpg)] bg-cover bg-no-repeat py-48 md:h-auto">
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
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs flex flex-col items-center gap-[72px] px-1.5 md:gap-[54px] md:px-5 sm:gap-9" />
          <div className="container-xs px-1.5 md:px-5">
            <div className="ml-8 grid grid-cols-3 justify-center gap-[134px] gap-y-[108px] md:ml-0 md:grid-cols-2 sm:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <Link
                  to={d.linkTo} 
                  key={"members" + index}                >
                
                  <UserProfile2 {...d} key={"generaltips" + index} />
                  </Link>
                ))}
              </Suspense>
            </div>
          </div>
          <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5" />
        <div className="container-xs flex flex-col items-center gap-[72px] px-1.5 md:gap-[54px] md:px-5 sm:gap-9" />
        <Footer1 />
        </div>
    </>
  );
}