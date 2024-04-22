import { LandingPageTitleBox } from "#/components/pageSpecific/landing/titleBox";
import NoiseyBlob from "#/components/three/blob/main";
import React from "react";

interface HomePageProps {}


const HomePage = (props: HomePageProps) => {
  return (
    <>
      <div
        className={"relative w-full h-full min-h-screen overflow-hidden text-foreground"}
      >
        <NoiseyBlob />
        <LandingPageTitleBox />
      </div>
    </>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
