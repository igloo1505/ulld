import NoiseyBlob from "#/components/three/blob/main";
import React from "react";

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  return (
    <>
      <div
        className={"w-full h-full min-h-screen overflow-hidden text-foreground"}
      >
        <div
          className={
            "lg:w-[40vw] h-full min-h-screen flex flex-col justify-center items-center z-10 pl-8 py-8"
          }
        >
          <h1
            className={
              "text-8xl text-sky-50 font-semibold flex flex-col justify-center items-start tracking-wide"
            }
          >
            <span>Uh</span>
            <span>Little</span>
            <span>Less</span>
            <span>Dum</span>
          </h1>
        </div>
        <NoiseyBlob />
      </div>
    </>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
