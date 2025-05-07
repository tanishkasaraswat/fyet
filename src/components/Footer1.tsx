import { Text } from "./Text";
import { Img } from "./Img";
import React from "react";

export default function Footer1() {
  // LinkedIn profile URLs
  const linkedinProfiles = [
    "https://www.linkedin.com/in/aditya-dhangar/",
    "https://www.linkedin.com/in/aman-jaiswal-427246252/",
    "https://www.linkedin.com/in/paras-sahu-555858193/",
    "https://www.linkedin.com/in/tanishka-saraswat-65aa19229/"
  ];

  return (
    <footer className="w-full bg-fyet_framer_website-chocolate py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Flex container for adjacent sections */}
        <div className="flex flex-wrap justify-between gap-8">
          
          {/* 1. Brand Section (25% width) */}
          <div className="min-w-[200px] flex-1">
            <Text className="text-xl !text-fyet_framer_website-gamboge mb-4">
              Brand and Mission
            </Text>
            <Text className="text-lg !text-white">F.Y.E.T.: Fitness from Yoga,</Text>
            <Text className="text-lg !text-white">Exercises & Tips</Text>
            <Text className="text-lg italic !text-white mt-4">
              "Let's F.Y.E.T. from F.Y.E.T. for F.Y.E.T."
            </Text>
          </div>

          {/* 2. Quick Links (25% width) */}
          <div className="min-w-[200px] flex-1">
            <Text className="text-xl !text-fyet_framer_website-gamboge mb-4">
              Quick Links
            </Text>
            {['Home', 'Features', 'About Us', 'Contact Us'].map((item) => (
              <a key={item} href="#" className="block mb-2">
                <Text className="text-lg !text-white hover:underline">
                  {item}
                </Text>
              </a>
            ))}
          </div>

          {/* 3. Additional Links (25% width) */}
          <div className="min-w-[200px] flex-1">
            <Text className="text-xl !text-fyet_framer_website-gamboge mb-4">
              Additional Links
            </Text>
            <a href="#" className="block mb-2">
              <Text className="text-lg !text-white hover:underline">
                WHO- Physical Activity
              </Text>
            </a>
            <a href="#" className="block">
              <Text className="text-lg !text-white hover:underline">
                NIH- Yoga Research
              </Text>
            </a>
          </div>

          {/* 4. Social Links (25% width) */}
          <div className="min-w-[200px] flex-1">
            <Text className="text-xl !text-fyet_framer_website-gamboge mb-4">
              Stay Connected
            </Text>
            <div className="flex gap-4">
              {linkedinProfiles.map((profile, index) => (
                <a 
                  key={index}
                  href={profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Img 
                    src="/public/images/linkedin-ad.png"
                    alt={`LinkedIn profile ${index + 1}`}
                    className="h-8 w-8"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright (centered below) */}
        <Text className="text-lg !text-white text-center mt-12">
          © 2025 FYET. All Rights Reserved.
        </Text>
      </div>
    </footer>
  );
}