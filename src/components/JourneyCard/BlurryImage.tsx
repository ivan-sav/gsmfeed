import { IComponent } from "@/types/common";
import Image from "next/image";

interface IBlurryImageProps extends IComponent {
  blurImageSrc: string;
  mainImageSrc: string;
}

export const BlurryImage: React.FC<IBlurryImageProps> = ({
  blurImageSrc,
  mainImageSrc,
  className,
}) => {
  return (
    <div className={className}>
      <div className={`relative max-w-[186px] max-h-[186px]`}>
        <Image
          className="blur-[50px]"
          src={blurImageSrc}
          width={186}
          height={186}
          alt="Blur image"
        />
        <Image
          className="absolute top-[32px] right-[28px]"
          src={mainImageSrc}
          width={130}
          height={130}
          alt="Ivest icon"
        />
      </div>
    </div>
  );
};
