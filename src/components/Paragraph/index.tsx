import { Typography } from "@/libraries/material-tailwind";
import React from "react";

interface IParagraphProps {
  className?: string;
}

export const Paragraph: React.FC<React.PropsWithChildren<IParagraphProps>> = ({
  children,
  className = "",
}) => {
  return (
    <Typography
      className={`text-[#ffffffb3] font-poppins font-normal text-[16px] md:text-[20px] ${className}`}
      placeholder=""
    >
      {children}
    </Typography>
  );
};
