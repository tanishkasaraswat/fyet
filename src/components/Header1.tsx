import { Img } from "./Img";
import { Button } from "./Button";
import { Heading } from "./Heading";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  className?: string;
}

export default function Header1({ ...props }: Props) {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleItemClick = (item: string, path: string) => {
    setActiveItem(item === activeItem ? null : item);
    navigate(path);
  };

  // Handle navigation to subsections within the about page
  const handleSubsectionClick = (item: string, sectionId: string) => {
    setActiveItem(item);
    // Navigate to about page with the section ID
    navigate("/about", { state: { scrollTo: sectionId } });
  };

  const navItemClass = (item: string) => `
    !font-montserrat text-[17px] font-bold 
    ${activeItem === item ? '!text-fyet_framer_website-gamboge' : '!text-fyet_framer_website-black'}
    hover:!text-fyet_framer_website-gamboge cursor-pointer transition-colors duration-200
  `;

  return (
    <header
      {...props}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center gap-5 px-[124px] py-2 md:px-5 bg-fyet_framer_website-white shadow-md"
    >
      <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
        <Img src="images/logo.png" alt="Logo" className="h-[44px] object-cover md:w-full" />
      </a>
      <Button 
        shape="square" 
        className={`min-w-[76px] px-2.5 font-montserrat font-bold ${activeItem === 'Home' ? 'text-fyet_framer_website-gamboge' : ''} hover:text-fyet_framer_website-gamboge transition-colors duration-200`}
        onClick={() => handleItemClick('Home', "/home1")}
      >
        Home
      </Button>
      <Heading
        size="fyet_framer_website_montserrat_bold"
        as="h6"
        className={`flex items-center justify-center bg-fyet_framer_website-white py-2.5 ${navItemClass('Core Team')}`}
        onClick={() => handleItemClick('About', "/about")}
      >
        About
      </Heading>
      
      <Heading
        size="fyet_framer_website_montserrat_bold"
        as="h6"
        className={`flex items-center justify-center bg-fyet_framer_website-white py-2.5 ${navItemClass('Core Team')}`}
        onClick={() => handleItemClick('Core Team', "/coreteam")}
      >
        Core Team
      </Heading>
      
      <Heading
        size="fyet_framer_website_montserrat_bold"
        as="h6"
        className={`flex items-center justify-center bg-fyet_framer_website-white py-2.5 ${navItemClass('Instructors')}`}
        onClick={() => handleItemClick('Instructors', "/instructors")}
      >
        Instructors
      </Heading>
      
      <div className="h-[18px] w-[6%] bg-fyet_framer_website-white" />
      
      <Heading
        size="fyet_framer_website_montserrat_bold"
        as="h6"
        className={`rounded-[14px] bg-fyet_framer_website-gamboge px-3 py-0.5 !font-montserrat text-[17px] font-bold !text-fyet_framer_website-white hover:bg-opacity-90 transition-colors duration-200 cursor-pointer`}
        onClick={() => handleItemClick('Register', "/register")}
      >
        Login/Register
      </Heading>
    </header>
  );
}