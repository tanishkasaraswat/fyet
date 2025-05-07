import { Helmet } from "react-helmet";
import { Heading } from "../components";
import { Header1, Footer1 } from "../components";
import UserProfile2 from "../components/UserProfile2";
import React, { Suspense } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const data = [
  { userImage: "images/curry-leaves.jpg", headingText: "Curry Leaves" , linkTo: "/Necktips" },
  { userImage: "images/banana.jpg", headingText: "Banana", linkTo: "/NecktipsOne" },
  { userImage: "images/ginger.jpg", headingText: "Ginger", linkTo: "/NecktipsFour" },
  { userImage: "images/posture.jpg", headingText: "Posture", linkTo: "/NecktipsThree" },
  { userImage: "images/cardomom.jpg", headingText: "Cardamom (Elaichi)", linkTo: "/NecktipsTwo" },
];

export default function Necktips1Page() {
    return (
      <>
        <Helmet>
          <title>fyet</title>
          <meta name="description" content="Web site created using create-react-app" />
        </Helmet>
        <div className="w-full bg-fyet_framer_website-white">
          <Header1 />
          <div className="flex flex-col items-center gap-[108px] md:gap-[81px] sm:gap-[54px]">
            <div className="flex h-[580px] items-start justify-center self-stretch bg-[url(/public/images/tips-page.jpg)] bg-cover bg-no-repeat py-[140px] md:h-auto md:py-5">
              <div className="container-xs mb-16 flex justify-center px-14 md:px-5">
                <div className="flex w-[22%] flex-col items-end md:w-full">
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
          <div className="container-xs px-1.5 md:px-5">
        <div className="ml-8 grid grid-cols-3 justify-center gap-[134px] gap-y-[108px] md:ml-0 md:grid-cols-2 sm:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <Link
                to={d.linkTo} 
                key={"members" + index}                >
              
                <UserProfile2 {...d} key={"necktips" + index} />
                </Link>
              ))}
            </Suspense>
        </div>
      </div>
      </div>
      <Footer1 />
    </div>
    </>
  );
}

