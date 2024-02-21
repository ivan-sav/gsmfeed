import { BlurryImage } from "./BlurryImage";
import { Typography } from "@/libraries/material-tailwind";

interface IJourneyCardProps {
  title: string;
  description: string;
  blurImageSrc: string;
  mainImageSrc: string;
}

export const JourneyCard: React.FC<IJourneyCardProps> = ({
  title,
  description,
  blurImageSrc,
  mainImageSrc,
}) => {
  return (
    <div>
      <div className="bg-[#D3D3D308] backdrop-blur-[10px] rounded-[10px] max-w-[373px] h-[253px] px-[27px] pt-[80px] pb-[56px] flex flex-col items-center justify-center relative">
        <Typography
          className="font-poppins font-normal text-white text-[24px]"
          placeholder=""
        >
          {title}
        </Typography>
        <Typography
          className="font-poppins font-normal text-[#ffffffB2] text-center text-[16px] pt-[8px]"
          placeholder=""
        >
          {description}
        </Typography>
        <BlurryImage
          className="absolute -top-[120px]"
          blurImageSrc={blurImageSrc}
          mainImageSrc={mainImageSrc}
        />
      </div>
    </div>
  );
};
