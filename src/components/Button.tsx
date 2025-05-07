import React from "react";

const shapes = {
  round: "rounded-lg",
  square: "rounded-[0px]",
} as const;

const variants = {
  fill: {
    "fyet.framer.website_concrete": "bg-fyet_framer_website-concrete text-fyet_framer_website-gamboge",
    "fyet.framer.website_gamboge": "bg-fyet_framer_website-gamboge shadow-md text-fyet_framer_website-white",
    "fyet.framer.website_mine_shaft": "bg-fyet_framer_website-mine_shaft shadow-md text-fyet_framer_website-white",
    "fyet.framer.website_white": "bg-fyet_framer_website-white text-fyet_framer_website-black",
  },
} as const;

const sizes = {
  md: "h-[46px] px-3.5 text-[14px]",
  sm: "h-[40px] px-3 text-[14px]",
  xs: "h-[30px] px-2.5 text-[17px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> & 
Partial<{
  className: string;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  onClick: () => void;
  shape: keyof typeof shapes;
  variant: keyof typeof variants | null;
  size: keyof typeof sizes;
  color: string;
}>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "fyet.framer.website_white",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };