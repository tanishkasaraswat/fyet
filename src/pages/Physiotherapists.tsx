import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../components";
import Footer1 from "../components/Footer1";
import Header1 from "../components/Header1";
import React from "react";

export default function PhysiotherapistsPage() {
  return (
    <>
      <Helmet>
        <title>fyet</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-fyet_framer_website-white">
        <Header1 />
        <div>
          <Header1 />
          <div className="flex h-[580px] items-start justify-center bg-[url(/public/images/home.jpg)] bg-cover bg-no-repeat py-[188px] md:h-auto md:py-5">
            <div className="container-xs mb-[52px] flex justify-center px-14 md:px-5">
              <Heading 
                size="fyet_framer_website_frankruhl_light_semibold" 
                as="h1" 
                className="text-[115px] font-semibold md:text-[48px]"
              >
                Physiotherapy 


                Instructors
              </Heading>
            </div>
          </div>
        </div>
  
        <div className="mt-12 flex flex-col items-center self-stretch">
          <div className="flex justify-center self-stretch py-[22px] sm:py-5">
            <div className="container-xs flex justify-center px-1 md:px-5">
              <div className="flex w-full items-start justify-between gap-5 md:flex-col">
                <Img 
                  src="images/avinash.jpeg" 
                  alt="image" 
                  className="ml-3 h-[300px] w-[24%] self-center rounded-[100px] object-contain md:ml-0 md:w-full" 
                />
                <div className="mt-2.5 flex w-[68%] flex-col items-start gap-[30px] md:w-full">
                  <Heading 
                    size="headingxs" 
                    as="h2" 
                    className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                  >
                    Dr. Abinash Biswaranjan Mohapatra
                  </Heading>
                  <Text 
                    size="textmd" 
                    as="p" 
                    className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                  >
                    Dr. Abinash is a highly experienced physiotherapy expert dedicated to helping individuals recover, strengthen, and enhance mobility through specialized physiotherapy techniques. With a deep understanding of musculoskeletal health, rehabilitation strategies, and pain management, he plays a key role in guiding users through effective physiotherapy routines. His expertise ensures that our physiotherapy programs are scientifically backed, safe, and tailored to individual needs, helping users achieve optimal physical well-being.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs mt-3.5 flex flex-col items-center md:px-5">
          <Text 
            size="textxl" 
            as="p" 
            className="rotate-[-180deg] text-[44px] font-light !text-gray-500_3d md:text-[40px] sm:text-[34px]"
          >
            ____________________________
          </Text>
        </div>
        <div className="mt-12 flex flex-col items-center self-stretch py-[22px] sm:py-5">
          <div className="container-xs mb-[42px] flex justify-center px-2.5 md:px-5">
            <div className="flex w-full items-center justify-between gap-5 md:flex-col">
              <Img 
                src="images/dharmendra.jpg" 
                alt="image" 
                className="ml-1.5 h-[300px] w-[24%] self-center rounded-[100px] object-contain md:ml-0 md:w-full" 
              />
              <div className="mt-5 flex w-[68%] flex-col items-start gap-[22px] md:w-full">
                <Heading 
                  size="headingxs" 
                  as="h3" 
                  className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                >
                  Dharmendra Singh
                </Heading>
                <Text 
                  size="textmd" 
                  as="p" 
                  className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                >
                  With 15 years of experience in physiotherapy, Dharmendra Singh specializes in rehabilitation, pain management, and mobility enhancement. His expertise spans various therapeutic techniques, helping individuals recover from injuries, improve posture, and enhance physical well-being. At FYET, he ensures that every physiotherapy routine is scientifically designed, safe, and effective, catering to diverse needs from injury recovery to long-term wellness.                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs relative mt-[-10px] flex flex-col items-center md:px-5">
          <Text 
            size="textxl" 
            as="p" 
            className="rotate-[-180deg] text-[44px] font-light !text-gray-500_3d md:text-[40px] sm:text-[34px]"
          >
            ____________________________
          </Text>
        </div>
        <div className="mt-12 flex flex-col items-center self-stretch py-[22px] sm:py-5">
          <div className="container-xs mb-[42px] flex justify-center px-2.5 md:px-5">
            <div className="flex w-full items-center justify-between gap-5 md:flex-col">
              <Img 
                src="images/anmol jaiswal.jpg" 
                alt="image" 
                className="ml-1.5 h-[300px] w-[24%] self-center rounded-[100px] object-contain md:ml-0 md:w-full" 
              />
              <div className="mt-5 flex w-[68%] flex-col items-start gap-[22px] md:w-full">
                <Heading 
                  size="headingxs" 
                  as="h3" 
                  className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                >
                  Anmol Jaiswal 
                </Heading>
                <Text 
                  size="textmd" 
                  as="p" 
                  className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                >
                  Anmol Jaiswal brings expertise in movement therapy, rehabilitation, and pain management, helping individuals regain strength and flexibility through structured physiotherapy routines. With a strong focus on personalized care, he ensures that every session is tailored to meet the specific needs of users, promoting faster recovery and long-term well-being.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs mt-2 flex flex-col items-center md:px-5">
          <Text 
            size="textxl" 
            as="p" 
            className="rotate-[-180deg] text-[44px] font-light !text-gray-500_3d md:text-[40px] sm:text-[34px]"
          >
            ____________________________
          </Text>
        </div>
        <div className="mt-[26px] flex justify-center self-stretch py-[22px] sm:py-5">
          <div className="container-xs flex justify-center px-2.5 md:px-5">
            <div className="flex w-full items-center justify-between gap-5 md:flex-col">
              <Img 
                src="images/armaan ansari.jpg" 
                alt="image" 
                className="h-[300px] w-[24%] self-center rounded-[100px] object-contain md:w-full" 
              />
              <div className="mt-[22px] flex w-[68%] flex-col items-start gap-6 md:w-full">
                <Heading 
                  size="headingxs" 
                  as="h5" 
                  className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                >
                  Armaan Ansari
                </Heading>
                <Text 
                  size="textmd" 
                  as="p" 
                  className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                >
                  Armaan Ansari specializes in injury rehabilitation, posture correction, and mobility enhancement. His approach focuses on targeted physiotherapy exercises designed to improve flexibility, reduce pain, and restore movement. With a commitment to personalized care, he ensures that users receive safe and effective physiotherapy routines tailored to their needs.
                </Text>
              </div>
            </div>
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