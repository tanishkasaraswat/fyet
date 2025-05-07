import React from "react";

const sizes = {
  fyet_framer_website_inter_regular: "font-inter text-[2px] font-normal lg:text-[2px] sm:text-[17px]",
  fyet_framer_website_inter_regular1: "font-inter text-[24px] font-normal lg:text-[24px] md:text-[22px] sm:text-[20px]",
  fyet_framer_website_dm_sans_9pt_regular: 
    "font-dmsans text-[48px] font-normal lg:text-[48px] md:text-[44px] sm:text-[40px]",
  fyet_framer_website_inter_regular2: "font-inter text-[55px] font-normal lg:text-[55px] md:text-[47px] sm:text-[40px]",
  fyet_framer_website_inter_light: "font-inter text-[44px] font-light lg:text-[44px] md:text-[40px] sm:text-[37px]",
  fyet_framer_website_poppins_light: "font-poppins text-[44px] font-light lg:text-[44px] md:text-[40px] sm:text-[37px]",
  textxs: "text-[14px] font-normal",
  texts: "text-[16px] font-normal sm:text-[13px]",
  textmd: "text-[20px] font-light sm:text-[17px]",
  textlg: "text-[32px] font-light lg:text-[32px] md:text-[30px] sm:text-[27px]",
  textxl: "text-[44px] font-light lg:text-[44px] md:text-[40px] sm:text-[37px]",
  text2xl: "text-[48px] font-normal lg:text-[48px] md:text-[44px] sm:text-[40px]",
  text3xl: "text-[72px] font-normal lg:text-[72px] md:text-[48px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> & 
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "text2xl",
  ...restProps
}) => {
  const Component = as || "p";
  
  return (
    <Component 
      className={`text-fyet_framer_website-black font-inter ${className} ${sizes[size as keyof typeof sizes]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };