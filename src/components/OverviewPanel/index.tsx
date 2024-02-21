import React from "react";
import Image from "next/image";
import { Typography } from "@/libraries/material-tailwind";
import { IComponent } from "@/types/common";

interface IOverviewPanelProps {
  title: string;
  imageSrc: string;
  isReverse?: boolean;
}

export const OverviewPanel: React.FC<
  React.PropsWithChildren<IOverviewPanelProps & IComponent>
> = ({ title, imageSrc, children, isReverse, className }) => {
  const reversedWrapperCss = "lg:flex-row-reverse lg:divide-x-reverse";
  const descriptionWrapperCss = "lg:pr-[76px]";
  return (
    <div
      className={`flex gap-[76px] lg:divide-x-[2px] divide-[#707070] ${
        isReverse && reversedWrapperCss
      } ${className}`}
    >
      <div className="w-[420px] hidden lg:block">
        <Image src={imageSrc} width={412} height={277} alt="Overview" />
      </div>
      <div className={isReverse ? descriptionWrapperCss : "lg:pl-[76px]"}>
        <Typography
          className={`text-white text-center font-poppins font-semibold text-[28px] ${
            isReverse ? "lg:text-right" : "lg:text-left"
          }`}
          placeholder=""
        >
          {title}
        </Typography>
        <div className="pt-[33px]">{children}</div>
      </div>
    </div>
  );
};
