import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../components";
import { Footer1, Header1 } from "../components";
import YogaProfile1 from "../components/YogaProfile1";
import React, { Suspense } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const data = [
  {
    yogaImage: "images/yoga-home.jpg",
    headingText: "Yoga",
    introText: "Balance your daily life with ",
    firstText: "yoga asans.",
    secondText: "",
    readMoreButtonText: "Read More",
  },
  {
    yogaImage: "images/physio-home.jpg",
    headingText: "Physiotherapy Exercises",
    introText: "Enhance your daily well-",
    firstText: "being with physiotherapy ",
    secondText: "exercises.",
    readMoreButtonText: "Read More",
  },
  {
    yogaImage: "images/tips.jpg",
    headingText: "Tips",
    introText: "Look at some general and",
    firstText: "specific tips that will take",
    secondText: "you to a healthier life.",
    readMoreButtonText: "Read More",
    isLink: true, // Flag to identify the tips card
    linkTo: "/tips" // Path for tips page
  },
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-linen">
        <Header1 />
        <div>
          <section className="relative h-[580px] w-full md:h-auto">
            <div 
              className="absolute inset-0 z-0 bg-[url('/images/home.jpg')] bg-cover bg-center bg-no-repeat"
              aria-hidden="true"
            />
            <div className="relative z-10 flex h-full items-center">
              <div className="container mx-auto pl-[10%] text-left">
                <Heading
                  size="fyet_framer_website_frankruhl_light_semibold"
                  as="h1"
                  className="text-[115px] font-semibold md:text-[48px]"
                >
                  F.Y.E.T.
                </Heading>
                <Text
                  size="fyet_framer_website_inter_regular"
                  as="p"
                  className="text-[59px] font-normal leading-[66px] !text-fyet_framer_website-tamarind md:text-[47px] sm:text-[41px]"
                >
                  <> 
                    Fitness from <br /> Yoga, Exercises & Tips
                  </>
                </Text>
              </div>
            </div>
          </section>
          <div className="flex flex-col items-center justify-center bg-fyet_framer_website-white py-[88px] md:py-5">
            <div className="container-xs flex flex-col items-center px-[22px] md:px-5">
              <Text
                size="fyet_framer_website_dm_sans_9pt_regular"
                as="p"
                className="!font-dmsans text-[48px] font-normal !text-fyet_framer_website-tamarind md:text-[44px] sm:text-[38px]"
              >
                What F.Y.E.T. Offers You
              </Text>
              <Text
                size="fyet_framer_website_inter_regular1"
                as="p"
                className="mt-5 text-[24px] font-normal !text-fyet_framer_website-tamarind md:text-[22px]"
              >
                PERSONALISED YOGA ROUTINES, EXPERT TIPS, AND WELLNESS INSIGHTS-JUST FOR YOU
              </Text>
              <div className="ml-[38px] mr-7 mt-[54px] self-stretch px-9 md:mx-0 sm:px-5">
                <div className="flex gap-5 md:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <YogaProfile1 
                        {...d}
                        key={"home" + index}
                        readMoreButton={d.isLink ? (
                          <Link to={d.linkTo}>
                            <Button
                              color="fyet.framer.website_gamboge"
                              size="md"
                              shape="round"
                              className="min-w-[106px] rounded-lg px-3.5 font-inter font-semibold hover:opacity-90 transition-opacity duration-300"
                            >
                              {d.readMoreButtonText}
                            </Button>
                          </Link>
                        ) : (
                          <Button
                            color="fyet.framer.website_gamboge"
                            size="md"
                            shape="round"
                            className="min-w-[106px] rounded-lg px-3.5 font-inter font-semibold"
                          >
                            {d.readMoreButtonText}
                          </Button>
                        )}
                      />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        <div className="relative mt-[-4px]">
  <div className="flex justify-center bg-fyet_framer_website-white">
    <div className="container-xs mb-[102px] flex items-center justify-between gap-5 md:flex-col md:px-5">
      {/* Left Heading - Centered with right content */}
      <div className="flex h-full w-[36%] items-center justify-end md:w-full md:justify-center">
        <Heading
          size="headinglg"
          as="h2"
          className="!font-montserrat text-[72px] font-bold leading-[86px] tracking-[-3.03px] !text-fyet_framer_website-midnight md:text-center"
        >
          <span className="text-fyet_framer_website-midnight">
            F.Y.E.T. is <br />
          </span>
          <span className="text-fyet_framer_website-gamboge">PATENTED</span>
        </Heading>
      </div>

      {/* Vertical Line - Perfectly centered between elements */}
      <div className="flex h-[280px] items-center justify-center md:hidden">
        <div className="h-full w-px bg-gray-300"></div>
      </div>

      {/* Right Content - Aligned with heading */}
      <div className="flex w-[48%] flex-col justify-center md:w-full">
        <Heading
          size="fyet_framer_website_semantic_heading_2"
          as="h3"
          className="text-justify !font-inter text-[20px] font-medium leading-[30px] tracking-[-0.70px] !text-fyet_framer_website-ferra"
        >
          We are proud to announce FYET is officially patented, recognizing its revolutionary use of machine learning for fitness and wellness. This patent thoroughly validates the originality and effectiveness of our ML-powered personalized health solutions, thereby establishing a higher standard in the industry.
        </Heading>
        <Heading
          size="fyet_framer_website_semantic_heading_2"
          as="h4"
          className="mt-6 text-justify !font-inter text-[20px] font-medium leading-[30px] tracking-[-0.70px] !text-fyet_framer_website-ferra"
        >
          F.Y.E.T. keeps changing fitness via this patent through the addition of smart suggestions, expert advice, as well as total wellness schedules. A fully transformative experience is guaranteed for all people wanting a healthier and more balanced lifestyle through our dedication to genuine scientific innovation and entirely user-centric design.
        </Heading>
      </div>
    </div>
  </div>
</div>
    
          <div className="relative mt-[-28px] h-[770px] bg-fyet_framer_website-white md:h-auto">
            <Img
              src="images/F.Y.E.T..png"
              alt="bg"
              className="h-[670px] w-full flex-1 object-cover"
            />
            <div className="container-xs absolute left-0 right-0 top-[13%] flex justify-center md:px-5">
              <div className="flex w-[94%] flex-col items-start md:w-full">
                <Heading
                  size="fyet_framer_website_dm_sans_bold"
                  as="h5"
                  className="!font-dmsans text-[44px] font-bold !text-fyet_framer_website-white md:text-[40px] sm:text-[34px]"
                >
                  Understanding the Gap
                </Heading>
                <Text
                  size="fyet_framer_website_poppins_light"
                  as="p"
                  className="!font-poppins text-[44px] font-light !text-fyet_framer_website-gamboge md:text-[40px] sm:text-[34px]"
                >
                  Insights from 250+ Participants via survey
                </Text>
                
                <div className="mt-[46px] flex items-start gap-2 self-stretch">
                  <Text
                    size="fyet_framer_website_inter_regular"
                    as="span"
                    className="!font-inter text-[24px] font-medium !text-fyet_framer_website-white md:text-[22px]"
                  >
                    •
                  </Text>
                  <Text
                    size="fyet_framer_website_inter_regular1"
                    as="p"
                    className="text-[24px] font-normal !text-fyet_framer_website-white md:text-[22px]"
                  >
                    <span className="font-medium">Busy Schedules: </span>Not enough time is the biggest obstacle.
                  </Text>
                </div>
                
                <div className="mt-4 flex items-start gap-2 self-stretch">
                  <Text
                    size="fyet_framer_website_inter_regular"
                    as="span"
                    className="!font-inter text-[24px] font-medium !text-fyet_framer_website-white md:text-[22px]"
                  >
                    •
                  </Text>
                  <Text
                    size="fyet_framer_website_inter_regular1"
                    as="p"
                    className="text-[24px] font-normal !text-fyet_framer_website-white md:text-[22px]"
                  >
                    <span className="font-medium">Limited Fitness Apps: </span>Despite the fact that yoga is booming, there is still a gap in providing personalized plans.
                  </Text>
                </div>
                
                <div className="mt-4 flex items-start gap-2 self-stretch">
                  <Text
                    size="fyet_framer_website_inter_regular"
                    as="span"
                    className="!font-inter text-[24px] font-medium !text-fyet_framer_website-white md:text-[22px]"
                  >
                    •
                  </Text>
                  <Text
                    size="fyet_framer_website_inter_regular1"
                    as="p"
                    className="text-[24px] font-normal !text-fyet_framer_website-white md:text-[22px]"
                  >
                    <span className="font-medium">Physiotherapy Exercises: </span>High costs and time constraints prevent many from seeking care.
                  </Text>
                </div>
                
                <div className="mt-4 flex items-start gap-2 self-stretch">
                  <Text
                    size="fyet_framer_website_inter_regular"
                    as="span"
                    className="!font-inter text-[24px] font-medium !text-fyet_framer_website-white md:text-[22px]"
                  >
                    •
                  </Text>
                  <Text
                    size="fyet_framer_website_inter_regular1"
                    as="p"
                    className="text-[24px] font-normal !text-fyet_framer_website-white md:text-[22px]"
                  >
                    <span className="font-medium">Need for Personalization: </span>Many users prefer tailored plans.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
              <div className="relative z-[1] mt-[-174px] flex justify-center bg-fyet_framer_website-white py-[68px] md:py-5">
              <div className="container-xs mt-[34px] flex justify-center px-[34px] md:px-5">
              <div className="flex w-full flex-col items-center gap-[58px] sm:gap-[29px]">
                <Heading
                  size="fyet_framer_website_semantic_strong"
                  as="h1"
                  className="!text-fyet_framer_website-cod_gray-1 !font-inter text-[41px] font-bold md:text-[37px] sm:text-[31px]"
                >
                  Be a Part of the Change!
                </Heading>
                <Heading
                  size="fyet_framer_website_semantic_strong1"
                  as="h3"
                  className="!font-inter text-[28px] font-bold !text-fyet_framer_website-gamboge md:text-[26px] sm:text-[24px]"
                >
                  If you face these challenges too, it&#39;s time to take control of your wellness.
                </Heading>
                <div className="flex w-[22%] justify-between gap-5 md:w-full">
                  <Button
                    color="fyet.framer.website_concrete"
                    size="md"
                    shape="round"
                    className="min-w-[106px] rounded-lg px-3.5 font-inter font-semibold"
                  >
                    Learn More
                  </Button>
                  <Button
                    color="fyet.framer.website_gamboge"
                    size="md"
                    shape="round"
                    className="min-w-[82px] rounded-lg px-3.5 font-inter font-semibold"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
              </div>
              
            <Footer1 />
          </>
        );
      }