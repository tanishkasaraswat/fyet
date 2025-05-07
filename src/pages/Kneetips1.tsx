import { Helmet } from "react-helmet";
import { Heading } from "../components";
import { Header1, Footer1 } from "../components";
import UserProfile2 from "../components/UserProfile2";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";

const data = [
  { userImage: "images/body-weight.jpg", headingText: "Body Weight" },
  { userImage: "images/meat.jpg", headingText: "Meat", linkTo: "/KneetipsOne" },
  { userImage: "images/strawberry.jpg", headingText: "Fruits & Veggies", linkTo: "/KneetipsFour" },
  { userImage: "images/alcohol.jpg", headingText: "Alcohol", linkTo: "/Kneetips" },
  { userImage: "images/clove-oil.jpg", headingText: "Clove Oil/Powder", linkTo: "/KneetipsThree" },
];

export default function Kneetips1Page() {
  return (
    <>
      <Helmet>
              <title>fyet</title>
              <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-fyet_framer_website-white">
              <Header1 />
              <div className="flex flex-col gap-[220px] md:gap-[165px] sm:gap-[110px]">
                <div className="flex h-[580px] flex-col items-center justify-center bg-[url(/public/images/tips-image.jpg)] bg-cover bg-no-repeat py-[166px] md:h-auto md:py-5">
                  <div className="container-xs mb-[62px] flex flex-col items-end pl-14 pr-[462px] md:px-5">
                    <Heading
                      size="headings"
                      as="h1"
                      className="mr-6 text-[48px] font-semibold md:mr-0 md:text-[44px] sm:text-[38px]"
                    >
                      Knee
                    </Heading>
                <Heading
                  size="headings"
                  as="h2"
                  className="relative mt-[-2px] text-[48px] font-semibold md:text-[44px] sm:text-[38px]"
                >
                  Related
                </Heading>
                <Heading
                  size="headings"
                  as="h3"
                  className="mr-[34px] text-[48px] font-semibold md:mr-0 md:text-[44px] sm:text-[38px]"
                >
                  Tips
                </Heading>
              </div>
              </div>
        <div className="container-xs px-1.5 md:px-5">
          <div className="ml-8 grid grid-cols-3 justify-center gap-[134px] gap-y-[108px] md:ml-0 md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <Link
                  to={d.linkTo} 
                  key={"members" + index}                >
                
                  <UserProfile2 {...d} key={"kneetips" + index} />
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