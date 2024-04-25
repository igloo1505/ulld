import { DescriptionSection } from "#/components/pageSpecific/landing/description/descriptionSection";
import { LandingPageTitleBox } from "#/components/pageSpecific/landing/titleBox";
import NoiseyBlob from "#/components/three/blob/main";
import { LandingSection, getLandingSectionClass, landingSectionIndex } from "#/types/landingSection";
import React from "react";
import clsx from 'clsx'
import ScrollGestureListener from "#/components/pageSpecific/landing/scrollGestureListener";



interface HomePageProps {
  searchParams: {
    section: LandingSection;
  };
}

const HomePage = ({ searchParams: { section = "hero" } }: HomePageProps) => {
  return (
    <div
      id={"main-landing-container"}
      className={
        clsx("group/landingContainer main-landing relative overflow-hidden h-screen w-screen max-h-screen", section === "hero" && "section-hero")
      }
    >
    <ScrollGestureListener />
      <div
        className={clsx("z-10", getLandingSectionClass("hero", section))}
      >
        <NoiseyBlob  />
        <LandingPageTitleBox />
      </div>
      <DescriptionSection />
    </div>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
