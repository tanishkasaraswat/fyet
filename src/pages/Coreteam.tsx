import { Helmet } from "react-helmet";
import { Text, Heading } from "../components";
import { Footer1, Header1 } from "../components";
import UserProfile1 from "../components/UserProfile1";
import React, { Suspense } from "react";

const teamMembers = [
  { 
    userImage: "/images/aditya.png", 
    userName: "Aditya Dhangar" 
  },
  { 
    userImage: "/images/aman.png", 
    userName: "Aman Jaiswal" 
  },
  { 
    userImage: "/images/paras.jpg", 
    userName: "Paras Sahu" 
  },
  { 
    userImage: "/images/tanishka.jpg", 
    userName: "Tanishka Saraswat" 
  },
];

const teamDescription = `
The FYET team is a group of four passionate and driven engineering students committed to 
revolutionizing fitness and wellness through ML and technology. With a shared vision of 
making personalized health solutions accessible to all, we have combined our expertise in 
software development, machine learning, and user experience design to create FYET—an 
innovative platform offering ML-generated workouts, physiotherapy exercises, guided yoga, 
and personalized wellness plans.

Our journey began with extensive research into the gaps in existing fitness solutions. 
Through in-depth analysis and user feedback, we identified the need for a holistic platform 
catering to fitness enthusiasts, professionals, seniors, and individuals with physical 
ailments. Our collaborative approach, technical skills, and dedication to improving health 
outcomes have shaped FYET into a transformative wellness solution.

Driven by innovation and a commitment to positive change, we continue to enhance FYET, 
ensuring that every user experiences the benefits of a smarter, more personalized fitness 
journey.
`;

export default function CoreTeamPage() {
  return (
    <>
      <Helmet>
        <title>FYET - Core Team</title>
        <meta 
          name="description" 
          content="Meet the passionate team behind FYET's innovative fitness technology solutions" 
        />
      </Helmet>

      <div className="w-full bg-fyet_framer_website-white">
        <Header1 />
        
        <div>
        <section className="relative h-[580px] w-full md:h-auto">
          <div 
            className="absolute inset-0 z-0 bg-[url('/public/images/home.jpg')] bg-cover bg-center bg-no-repeat"
            aria-hidden="true"
          />
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="container mx-auto text-center">
              <Heading
                size="fyet_framer_website_frankruhl_light_semibold"
                as="h1"
                className="text-[115px] font-semibold text-brown drop-shadow-md md:text-[72px] sm:text-[48px]"
              >
                Core Team
              </Heading>
            </div>
          </div>
        </section>

        {/* Team Intro Section */}
        <section className="bg-fyet_framer_website-white py-28 md:py-14">
          <div className="container mx-auto text-center">
            <div className="mb-24 md:mb-12">
              <Heading
                size="headinglg"
                as="h2"
                className="mb-4 font-montserrat text-6xl font-bold tracking-tight text-fyet_framer_website-midnight md:text-4xl"
              >
                Meet the
              </Heading>
              <Heading
                size="headinglg"
                as="h2"
                className="font-montserrat text-6xl font-bold tracking-tight text-fyet_framer_website-gamboge md:text-4xl"
              >
                F.Y.E.T. CORE TEAM
              </Heading>
            </div>

            <Text
              size="textlg"
              as="p"
              className="mx-auto max-w-4xl text-justify text-2xl font-light leading-relaxed text-fyet_framer_website-chocolate md:text-xl"
            >
              {teamDescription}
            </Text>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="container mx-auto mb-16 px-4">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={
              <div className="col-span-4 text-center text-xl text-gray-500">
                Loading team members...
              </div>
            }>
              {teamMembers.map((member, index) => (
                <UserProfile1 
                  key={`member-${index}`}
                  {...member}
                  className="w-full"
                />
              ))}
            </Suspense>
          </div>
        </section>

        <Footer1 />
      </div>
    </div>
    </>
  );
}