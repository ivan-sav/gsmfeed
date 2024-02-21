import { Typography } from "@/libraries/material-tailwind";

interface INetworkLabelProps {
  label: string;
  count: string;
  className?: string;
}

export const NetworkLabel: React.FC<INetworkLabelProps> = ({
  label,
  count,
  className = "",
}) => {
  return (
    <div className={`text-center ${className}`}>
      <Typography
        className="font-poppins font-medium text-[24px] text-primary"
        placeholder=""
      >
        {label}
      </Typography>
      <Typography
        className="font-poppins font-semibold text-[42px] text-white"
        placeholder=""
      >
        {count}
      </Typography>
    </div>
  );
};
