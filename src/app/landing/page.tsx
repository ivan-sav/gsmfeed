"use client";
import React from "react";
import Video from "next-video";
import Image from "next/image";
import { Button, Typography } from "@/libraries/material-tailwind";
import { Paragraph } from "@/components/Paragraph";
import {
  ABOUT_US,
  ABOUT_US_DESCRIPTION_PART1,
  ABOUT_US_DESCRIPTION_PART2,
  APPS,
  APPS_DESCRIPTION,
  FINANCIAL_OVERVIEW,
  FINANCIAL_OVERVIEW_DESCRIPTION_PART1,
  FINANCIAL_OVERVIEW_DETAIL,
  HOW_DO_WE_MAKE_MONEY,
  HOW_DO_WE_MAKE_MONEY_DESCRIPTION,
  INVESTMENT_OVERVIEW,
  INVESTMENT_OVERVIEW_DESCRIPTION,
  INVEST_IN_INNOVATION,
  JOURNEY_TITLE_GLOBAL_REACH,
  JOURNEY_TITLE_GLOBAL_REACH_DESCRIPTION,
  JOURNEY_TITLE_REVOLUTIONARY,
  JOURNEY_TITLE_REVOLUTIONARY_DESCRIPTION,
  JOURNY_TITLE_DATA_IS_THE_KEY,
  JOURNY_TITLE_DATA_IS_THE_KEY_DESCRIPTION,
  LANDING_PAGE_DESCRIPTION,
  LANDING_PAGE_HEADING,
  LAUNCHING_IN_OCTOBER,
  NETWORK_LABEL_COUNTRIES,
  NETWORK_LABEL_USERS,
  NETWORK_LABEL_VERIFIED_SUPPLIERS,
  STAY_IN_THE_LOOP,
  UNLOCK_THE_FUTURE,
  UNLOCK_THE_FUTURE_DESCRIPTION,
  UNLOCK_THE_MAGIC,
  WHY_INVEST_IN_US,
  WHY_INVEST_IN_US_DESCRIPTION,
  WORLDS_MARKETS,
  WORLDS_MARKETS_DESCRIPTION,
} from "@/constants/landing";
import { NetworkLabel } from "@/components/NetworkLabel";
import { LandingCaption } from "@/components/LandingCaption";
import { JourneyCard } from "@/components/JourneyCard";
import { OverviewPanel } from "@/components/OverviewPanel";

const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="relative h-[810px]">
        <Video
          poster="/assets/images/earth-poster.png"
          // src="/assets/videos/earth.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
        <div className="absolute w-full top-[83px] flex justify-center">
          <Image
            src="/assets/images/logo.svg"
            width={220}
            height={52}
            alt="logo"
          />
        </div>

        <div className="flex flex-col items-center absolute top-[405px] justify-center w-full md:p-0 px-8">
          <Typography
            className="text-white text-[50px] sm:text-[85px] font-poppins font-bold text-center max-w-[994px]"
            variant="h1"
            placeholder=""
          >
            {LANDING_PAGE_HEADING}
          </Typography>
          <Paragraph className="max-w-[420px] pt-[19px] text-center">
            {LANDING_PAGE_DESCRIPTION}
          </Paragraph>
          {/* <Image
            className="right-ellipse-blur"
            src="/assets/images/ellipse-blur.svg"
            width={1057}
            height={1103}
            alt="blur"
          /> */}
        </div>
      </div>

      <div className="pt-[102px]">
        <div className="flex flex-col items-center md:p-0 px-8">
          <LandingCaption className="text-center">{ABOUT_US}</LandingCaption>
          <Paragraph className="max-w-[908px] text-center pt-[11px]">
            {ABOUT_US_DESCRIPTION_PART1}
          </Paragraph>
        </div>
        <div className="relative pt-8">
          <Video
            className="hidden xs:block h-[552px]"
            poster="/assets/images/network-digital-globe-poster.png"
            // src="/assets/videos/earth.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
          <div className="flex flex-col items-center justify-center w-full absolute top-4 md:p-0 px-8">
            <Paragraph className="max-w-[908px] text-center  left-[266px]">
              {ABOUT_US_DESCRIPTION_PART2}
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="mt-[355px] xs:mt-0">
        <div className="flex flex-col items-center md:p-0 px-8">
          <LandingCaption className="text-center max-w-[762px]">
            {WORLDS_MARKETS}
          </LandingCaption>

          <Paragraph className="text-center max-w-[847px]">
            {WORLDS_MARKETS_DESCRIPTION}
          </Paragraph>
        </div>
        <div className="relative max-w-[984px] m-auto">
          <Video
            poster="/assets/images/tech-earth-networking-poster.png"
            // src="/assets/videos/tech-earth-networking.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
          <div className="hidden md:flex flex-col md:absolute bottom-[80px] left-[116px]">
            <NetworkLabel label={NETWORK_LABEL_USERS} count="35.000" />
          </div>
          <div className="hidden md:flex flex-col items-center w-full md:absolute -bottom-[50px]">
            <NetworkLabel
              label={NETWORK_LABEL_VERIFIED_SUPPLIERS}
              count="5.000+"
            />
          </div>
          <div className="hidden md:flex flex-col md:absolute bottom-[80px] right-[135px]">
            <NetworkLabel label={NETWORK_LABEL_COUNTRIES} count="40+" />
          </div>
        </div>
      </div>

      <div className="pt-[180px]">
        <div className="flex flex-col items-center md:p-0 px-8">
          <LandingCaption className="text-center">{APPS}</LandingCaption>
          <Paragraph className="text-center max-w-[572px] pt-[3px]">
            {APPS_DESCRIPTION}
          </Paragraph>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[80px] md:gap-[150px] pt-[45px] md:p-0 px-8">
          <Image
            src="/assets/images/projectmix-logo.png"
            width={321}
            height={61}
            alt="Projectmix logo"
          />
          <Image
            src="/assets/images/rma-logo.png"
            width={321}
            height={61}
            alt="RMA Check logo"
          />
        </div>
      </div>

      <div className="flex xl:flex-row flex-col items-center pt-[200px] relative">
        <Image
          src="/assets/images/rocket-comming-out.png"
          width={1033}
          height={722}
          alt="Rocket comming out"
        />
        <LandingCaption className="max-w-[470px] text-center xl:absolute xl:right-[192px] md:p-0 px-8">
          {LAUNCHING_IN_OCTOBER}
        </LandingCaption>
      </div>

      <div>
        <div className="flex xl:flex-row-reverse flex-col items-center relative">
          <Video
            className="max-w-[897px] h-[604px]"
            poster="/assets/images/coins-jar-poster.png"
            // src="/assets/videos/coins-jar.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
          <div className="text-center xl:absolute xl:text-left left-[120px] md:p-0 px-8">
            <div>
              <LandingCaption>{UNLOCK_THE_FUTURE}</LandingCaption>
              <LandingCaption>{INVEST_IN_INNOVATION}</LandingCaption>
            </div>
            <Paragraph className="text-center xl:text-left max-w-[726px] pt-[27px]">
              {UNLOCK_THE_FUTURE_DESCRIPTION}
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="pt-[170px]">
        <div className="flex flex-col items-center md:p-0 px-8">
          <LandingCaption className="text-center">
            {WHY_INVEST_IN_US}
          </LandingCaption>
          <Paragraph className="text-center max-w-[816px] pt-[11px]">
            {WHY_INVEST_IN_US_DESCRIPTION}
          </Paragraph>
        </div>
        <div className="flex flex-col lg2:flex-row pt-[145px] gap-[150px] lg2:gap-[40px] justify-center items-center">
          <JourneyCard
            title={JOURNEY_TITLE_REVOLUTIONARY}
            description={JOURNEY_TITLE_REVOLUTIONARY_DESCRIPTION}
            blurImageSrc="/assets/images/light-blue-blur.png"
            mainImageSrc="/assets/images/light-mask.png"
          />
          <JourneyCard
            title={JOURNEY_TITLE_GLOBAL_REACH}
            description={JOURNEY_TITLE_GLOBAL_REACH_DESCRIPTION}
            blurImageSrc="/assets/images/primary-blue-blur.png"
            mainImageSrc="/assets/images/earth-mask.png"
          />
          <JourneyCard
            title={JOURNY_TITLE_DATA_IS_THE_KEY}
            description={JOURNY_TITLE_DATA_IS_THE_KEY_DESCRIPTION}
            blurImageSrc="/assets/images/pink-blur.png"
            mainImageSrc="/assets/images/phone-book-mask.png"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-[240px] gap-[140px]">
        <OverviewPanel
          className="lg:pr-[88px]"
          title={FINANCIAL_OVERVIEW}
          imageSrc="/assets/images/financial-overview.png"
        >
          <div className="flex flex-col gap-1 md:p-0 px-8">
            <Typography
              className="font-poppins text-dark100 text-[16px]"
              placeholder=""
            >
              {FINANCIAL_OVERVIEW_DESCRIPTION_PART1}
            </Typography>
            <Typography
              className="flex gap-1 font-poppins text-dark100 text-[16px]"
              placeholder=""
            >
              2 million to Support the following plans:
            </Typography>
          </div>
          <div className="md:p-0 px-8">
            <ul className="flex flex-col gap-4 list-disc pl-[20px] pt-4 ">
              {FINANCIAL_OVERVIEW_DETAIL.map((detail) => (
                <li
                  key={detail}
                  className="font-poppins  text-dark100 text-[16px] font-extrabold"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </OverviewPanel>

        <OverviewPanel
          title={INVESTMENT_OVERVIEW}
          imageSrc="/assets/images/investment-overview.png"
          isReverse
        >
          <div className="flex flex-col gap-1 md:p-0 px-8">
            <Typography
              className="font-poppins text-dark100 text-[16px] text-center lg:text-right leading-relaxed max-w-[420px]"
              placeholder=""
            >
              {INVESTMENT_OVERVIEW_DESCRIPTION}
            </Typography>
          </div>
        </OverviewPanel>

        <OverviewPanel
          title={HOW_DO_WE_MAKE_MONEY}
          imageSrc="/assets/images/coin-graph-overview.png"
        >
          <div className="flex flex-col gap-1 md:p-0 px-8">
            <Typography
              className="font-poppins text-dark100 text-[16px] text-center lg:text-left leading-relaxed max-w-[420px]"
              placeholder=""
            >
              {HOW_DO_WE_MAKE_MONEY_DESCRIPTION}
            </Typography>
          </div>
        </OverviewPanel>
      </div>

      <div className="mt-[180px] mb-[46.5px] h-[592px] flex flex-col justify-center items-center  bg-[url('/assets/images/landing-wave.png')] bg-[length:1440px_592px] bg-no-repeat">
        <LandingCaption className="text-center">
          {UNLOCK_THE_MAGIC}
        </LandingCaption>
        <Paragraph>{STAY_IN_THE_LOOP}</Paragraph>
        <Button
          className="bg-primary rounded-full mt-[18px]"
          variant="filled"
          placeholder=""
        >
          Contact us
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
