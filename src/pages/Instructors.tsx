import { Helmet } from "react-helmet";
import { Heading } from "../components";
import { Footer1, Header1 } from "../components";
import UserProfile1 from "../components/UserProfile1";
import React, { Suspense } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const data = [
  { 
    userImage: "images/yoga-instructor.jpg", 
    userName: "Yoga Trainers",
    linkTo: "/Yogatrainers" // Add path for yoga trainers
  },
  { 
    userImage: "images/physio-instructor.jpg", 
    userName: "Physiotherapists",
    linkTo: "/Physiotherapists" // Add path for physiotherapists
  },
  { 
    userImage: "images/tips-instructor.png", 
    userName: "Dietitians",
    linkTo: "/Dietitians" // Add path for dietitians
  },
];

export default function InstructorsPage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
        <div>
          <Header1 />
          <div className="flex h-[580px] items-start justify-center bg-[url(/public/images/home.jpg)] bg-cover bg-no-repeat py-[188px] md:h-auto md:py-5">
            <div className="container-xs mb-[52px] flex justify-center px-14 md:px-5">
              <Heading 
                size="fyet_framer_website_frankruhl_light_semibold" 
                as="h1" 
                className="text-[115px] font-semibold md:text-[48px]"
              >
                Instructors
              </Heading>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center bg-fyet_framer_website-white py-[66px] md:py-5">
            <div className="container-xs mb-[70px] flex flex-col items-center gap-[86px] px-14 md:gap-16 md:px-5 sm:gap-[43px]">
              <Heading 
                size="headinglg" 
                as="h2" 
                className="w-[48%] text-center !font-montserrat text-[72px] font-bold leading-[86px] tracking-[-3.03px] !text-fyet_framer_website-midnight md:w-full md:text-[48px]"
              >
                <span className="text-fyet_framer_website-midnight">Meet our&nbsp;</span>
                <span className="text-fyet_framer_website-gamboge">instructor</span>
              </Heading>
              <div className="ml-2.5 flex gap-[88px] self-stretch bg-fyet_framer_website-white px-2 md:ml-0 md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <Link 
                      to={d.linkTo} 
                      key={"members" + index}
                      className="w-[32%] md:w-full" // Maintain the same width styling
                    >
                      <UserProfile1 
                        userImage={d.userImage} 
                        userName={d.userName} 
                        className="hover:opacity-90 transition-opacity duration-300 cursor-pointer" // Add hover effect
                      />
                    </Link>
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
}