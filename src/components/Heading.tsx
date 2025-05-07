import React from "react";

const sizes = {
  fyet_framer_website_montserrat_bold: "font-montserrat text-[17px] font-bold sm:text-[14px]",
  fyet_framer_website_semantic_heading_3: "tracking-[-0.50px] font-inter text-[20px] font-semibold sm:text-[17px]",
  fyet_framer_website_frankruhl_light_semibold: "text-[115px] font-semibold text-[115px] md:text-[40px]",
  fyet_framer_website_dm_sans_bold: "font-dmsans text-[44px] font-bold lg:text-[44px] md:text-[40px] sm:text-[37px]",
  fyet_framer_website_inter_medium: "font-inter text-[20px] font-medium sm:text-[17px]",
  fyet_framer_website_inter_medium1: "font-inter text-[19px] font-medium sm:text-[16px]",
  fyet_framer_website_semantic_heading_4: "tracking-[-0.50px] font-inter text-[20px] font-semibold sm:text-[17px]",
  fyet_framer_website_semantic_heading_2: "tracking-[-0.70px] font-inter text-[20px] font-medium sm:text-[17px]",
  fyet_framer_website_inter_medium2: "font-inter text-[24px] font-medium lg:text-[24px] md:text-[22px] sm:text-[20px]",
  fyet_framer_website_semantic_strong: "font-inter text-[41px] font-bold lg:text-[41px] md:text-[37px] sm:text-[34px]",
  fyet_framer_website_semantic_strong1: "font-inter text-[28px] font-bold lg:text-[28px] md:text-[26px] sm:text-[23px]",
  headingxs: "text-[25px] font-semibold lg:text-[25px] md:text-[23px] sm:text-[21px]",
  headings: "text-[48px] font-semibold lg:text-[48px] md:text-[44px] sm:text-[40px]",
  headingmd: "text-[64px] font-semibold lg:text-[64px] md:text-[48px]",
  headinglg: "text-[72px] font-bold lg:text-[72px] md:text-[48px]",
  headingxl: "text-[96px] font-semibold lg:text-[96px] md:text-[48px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> & 
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingmd",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-fyet_framer_website-chocolate font-frankruhllibre ${className} ${sizes[size] as keyof typeof sizes}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };