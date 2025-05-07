import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../components";
import Footer1 from "../components/Footer1";
import Header1 from "../components/Header1";
import React from "react";

export default function YogatrainersPage() {
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
                Yoga
              </Heading>
            </div>
          </div>
        </div>
  
        <div className="mt-12 flex flex-col items-center self-stretch">
          <div className="flex justify-center self-stretch py-[22px] sm:py-5">
            <div className="container-xs flex justify-center px-1 md:px-5">
              <div className="flex w-full items-start justify-between gap-5 md:flex-col">
                <Img 
                  src="images/gautam sahu.jpg" 
                  alt="image" 
                  className="ml-3 h-[300px] w-[24%] self-center rounded-[100px] object-contain md:ml-0 md:w-full" 
                />
                <div className="mt-2.5 flex w-[68%] flex-col items-start gap-[30px] md:w-full">
                  <Heading 
                    size="headingxs" 
                    as="h2" 
                    className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                  >
                    Gautam Sahu
                  </Heading>
                  <Text 
                    size="textmd" 
                    as="p" 
                    className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                  >
                    Gautam Sahu is a dedicated yoga instructor specializing in mind-body wellness, flexibility
                    enhancement, and breathwork techniques. With a deep understanding of traditional yoga practices,
                    he helps individuals achieve inner balance, strength, and relaxation through guided sessions.
                    His approach focuses on holistic well-being, combining physical postures, meditation, and
                    breathing exercises for a healthier lifestyle.
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
                src="images/jagriti.jpg" 
                alt="image" 
                className="ml-1.5 h-[300px] w-[24%] self-center rounded-[100px] object-contain md:ml-0 md:w-full" 
              />
              <div className="mt-5 flex w-[68%] flex-col items-start gap-[22px] md:w-full">
                <Heading 
                  size="headingxs" 
                  as="h3" 
                  className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                >
                  Jagriti Meena
                </Heading>
                <Text 
                  size="textmd" 
                  as="p" 
                  className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                >
                  A dedicated yoga instructor with 5 years of experience, helping individuals enhance their
                  physical and mental well-being through structured yoga sessions. She specializes in
                  flexibility improvement, stress management, and posture correction, ensuring a holistic
                  approach to health. Her teaching style focuses on blending traditional yoga practices with
                  modern techniques to create personalized routines for practitioners of all levels.
                </Text>
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
                src="images/arun.png" 
                alt="image" 
                className="ml-1.5 h-[300px] w-[24%] self-center rounded-[100px] object-contain md:ml-0 md:w-full" 
              />
              <div className="mt-5 flex w-[68%] flex-col items-start gap-[22px] md:w-full">
                <Heading 
                  size="headingxs" 
                  as="h3" 
                  className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                >
                  Arun Prakash 
                </Heading>
                <Text 
                  size="textmd" 
                  as="p" 
                  className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                >
                  A seasoned yoga instructor with 13 years of experience, specializing in holistic
                  wellness, mindfulness, and advanced asanas. His expertise lies in guiding
                  individuals through personalized yoga sessions, focusing on flexibility, strength,
                  and inner balance. With a deep understanding of traditional yogic principles, he
                  ensures a transformative experience for practitioners of all levels.
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
                src="images/priyanshu.jpg" 
                alt="image" 
                className="h-[300px] w-[24%] self-center rounded-[100px] object-contain md:w-full" 
              />
              <div className="mt-[22px] flex w-[68%] flex-col items-start gap-6 md:w-full">
                <Heading 
                  size="headingxs" 
                  as="h5" 
                  className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                >
                  Priyanshu
                </Heading>
                <Text 
                  size="textmd" 
                  as="p" 
                  className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                >
                  A seasoned yoga instructor with 10 years of experience, Priyanshu specializes in holistic
                  wellness through yoga, integrating traditional asanas, pranayama, and mindfulness techniques.
                  His expertise lies in improving flexibility, core strength, and mental clarity, catering to
                  individuals of all fitness levels. He is passionate about guiding people toward a balanced and
                  healthier lifestyle through customized yoga sessions.
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
                src="images/sunita.jpg" 
                alt="image" 
                className="h-[300px] w-[24%] rounded-[100px] object-contain md:w-full" 
              />
              <div className="mt-[22px] flex w-[68%] flex-col items-start gap-3.5 md:w-full">
                <Heading 
                  size="headingxs" 
                  as="h6" 
                  className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                >
                  Sunita Pal
                </Heading>
                <Text 
                  size="textmd" 
                  as="p" 
                  className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                >
                  A passionate yoga instructor with 3 years of experience, specializing in foundational yoga
                  practices, flexibility training, and stress relief techniques. She focuses on creating a
                  balanced approach that blends traditional asanas with modern wellness strategies, making yoga
                  accessible to individuals of all levels. Her sessions emphasize breath control, posture
                  correction, and mindfulness, helping practitioners achieve both physical and mental well-being.
                  Through her guidance, students develop a deeper connection with their bodies while fostering a
                  sense of inner calm and strength.
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
                src="images/praveen singh.jpg" 
                alt="image" 
                className="h-[300px] w-[24%] self-center rounded-[100px] object-contain md:w-full" 
              />
              <div className="mt-[22px] flex w-[68%] flex-col items-start gap-6 md:w-full">
                <Heading 
                  size="headingxs" 
                  as="h5" 
                  className="!font-inter text-[25px] font-semibold tracking-[-0.50px] !text-fyet_framer_website-black md:text-[23px] sm:text-[21px]"
                >
                  Praveen Singh
                </Heading>
                <Text 
                  size="textmd" 
                  as="p" 
                  className="w-full text-justify text-[20px] font-light leading-7 !text-fyet_framer_website-chocolate"
                >
                  A seasoned yoga instructor with 10 years of experience, Priyanshu specializes in holistic
                  wellness through yoga, integrating traditional asanas, pranayama, and mindfulness techniques.
                  His expertise lies in improving flexibility, core strength, and mental clarity, catering to
                  individuals of all fitness levels. He is passionate about guiding people toward a balanced and
                  healthier lifestyle through customized yoga sessions.
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