import Image from "next/image";
import React from "react";
import { Typography } from "@/libraries/material-tailwind";
import { FOOTER_MARK } from "@/constants/common";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center m-auto max-w-[1200px] sm:py-[21px] h-[105px] px-[120px] border-t-[2px] border-[#707070]">
      <Image src="/assets/images/logo.svg" width={186} height={44} alt="logo" />

      <Typography
        className="text-dark100 text-center font-poppins text-[14px] mt-[20px] hidden sm:block"
        placeholder=""
      >
        {FOOTER_MARK}
      </Typography>
    </footer>
  );
};
