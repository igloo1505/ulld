import React from "react";

interface AboutMePageProps {}

const AboutMePage = (props: AboutMePageProps) => {
  return (
    <div className={"h-screen flex flex-col justify-center item-center gap-6"}>
      <h1 className={"text-5xl font-bold"}>About me here</h1>
    </div>
  );
};

AboutMePage.displayName = "AboutMePage";

export default AboutMePage;
