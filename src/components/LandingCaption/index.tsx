import React from "react";
import { Typography } from "@/libraries/material-tailwind";
import { IComponent } from "@/types/common";

export const LandingCaption: React.FC<React.PropsWithChildren<IComponent>> = ({
  children,
  className = "",
}) => {
  return (
    <Typography
      className={`text-white text-[40px] sm:text-[56px] font-poppins font-bold ${className} `}
      variant="h2"
      placeholder=""
    >
      {children}
    </Typography>
  );
};
