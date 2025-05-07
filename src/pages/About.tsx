import { Helmet } from "react-helmet";
import { Text, Heading, Header1, Footer1 } from "../components";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
        <Header1 />
        <div className="flex h-[580px] items-start justify-center bg-[url(/public/images/home.jpg)] bg-cover bg-no-repeat py-[186px] md:h-auto md:py-5">
          <div className="container-xs mb-14 flex justify-center px-14 md:px-5">
              <Heading
                size="fyet_framer_website_frankruhl_light_semibold"
                as="h1"
                className="text-[115px] font-semibold text-brown drop-shadow-md md:text-[72px] sm:text-[48px]"
              >   
                About
            </Heading>
          </div>
        </div>
        <div className="flex flex-col items-center bg-fyet_framer_website-white">
        {/* Mission And Values Section */}
        <div className="container-xs w-full px-10 py-20 md:px-5">
          <Heading size="headinglg" as="h2" className="mb-12 !font-montserrat text-[72px] font-bold !text-fyet_framer_website-midnight md:text-[48px] sm:text-[38px]">
            Mission And Values
          </Heading>
          
          <div className="grid gap-12">
            {/* Educating */}
            <div className="flex items-start gap-4">
              <div className="mt-1 h-3 w-3 rounded-full bg-fyet_framer_website-gamboge"></div>
              <div>
                <Text as="p" className="text-[24px] font-bold !text-fyet_framer_website-chocolate md:text-[22px]">
                  Educating:
                </Text>
                <Text as="p" className="mt-2 text-[20px] !text-fyet_framer_website-chocolate md:text-[18px]">
                  Regular awareness sessions and in-app tutorials for precise workout techniques will serve as educational plans, engineering and empowering our users.
                </Text>
              </div>
            </div>
            
            {/* Inspiring */}
            <div className="flex items-start gap-4">
              <div className="mt-1 h-3 w-3 rounded-full bg-fyet_framer_website-gamboge"></div>
              <div>
                <Text as="p" className="text-[24px] font-bold !text-fyet_framer_website-chocolate md:text-[22px]">
                  Inspiring:
                </Text>
                <Text as="p" className="mt-2 text-[20px] !text-fyet_framer_website-chocolate md:text-[18px]">
                  A cutting-edge cabinet burn tracker, incentive-based reward coins, and an array of features, coupled with concise fitness enhancements, serve as compelling incentives for users, fostering ongoing engagement with our application.
                </Text>
              </div>
            </div>
            
            {/* Efficient */}
            <div className="flex items-start gap-4">
              <div className="mt-1 h-3 w-3 rounded-full bg-fyet_framer_website-gamboge"></div>
              <div>
                <Text as="p" className="text-[24px] font-bold !text-fyet_framer_website-chocolate md:text-[22px]">
                  Efficient:
                </Text>
                <Text as="p" className="mt-2 text-[20px] !text-fyet_framer_website-chocolate md:text-[18px]">
                  Leveraging generative AI and expert insights, the tailored fitness plan maximizes results in minimal time and effort, ensuring optimal efficiency and effectiveness.
                </Text>
              </div>
            </div>
            
            {/* Effective */}
            <div className="flex items-start gap-4">
              <div className="mt-1 h-3 w-3 rounded-full bg-fyet_framer_website-gamboge"></div>
              <div>
                <Text as="p" className="text-[24px] font-bold !text-fyet_framer_website-chocolate md:text-[22px]">
                  Effective:
                </Text>
                <Text as="p" className="mt-2 text-[20px] !text-fyet_framer_website-chocolate md:text-[18px]">
                  The data within the application is timeless, meticulously gathered from an extensive timeframe, showcasing its profound impact on enhancing people's lives.
                </Text>
              </div>
            </div>
            
            {/* Safe */}
            <div className="flex items-start gap-4">
              <div className="mt-1 h-3 w-3 rounded-full bg-fyet_framer_website-gamboge"></div>
              <div>
                <Text as="p" className="text-[24px] font-bold !text-fyet_framer_website-chocolate md:text-[22px]">
                  Safe:
                </Text>
                <Text as="p" className="mt-2 text-[20px] !text-fyet_framer_website-chocolate md:text-[18px]">
                  Each yoga routine, physio exercise, and tip in the application is expert-curated for a premium user experience.
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Us Different Section */}
        <div className="flex flex-col items-center justify-center bg-fyet_framer_website-white py-[100px] md:py-5">
                <div className="container-xs mb-[30px] flex flex-col items-center px-14 md:px-5">
                <Heading size="headinglg" as="h2" className="mb-12 !font-montserrat text-[72px] font-bold !text-fyet_framer_website-midnight md:text-[48px] sm:text-[38px]">
                    What Makes Us Different?
                  </Heading>
                </div>
                <img src="images/usp.png" alt="uspflow" className="ml-2.5 h-[502px] w-[92%] object-contain md:ml-0" />
        </div>
        <Footer1 />
      </div>
      </div>
    </>
  );
}