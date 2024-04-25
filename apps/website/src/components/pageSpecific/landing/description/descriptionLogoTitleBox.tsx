import React from "react";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import staticContent from "../../../../staticData/staticContent.json";

interface DescriptionLogoTitleBoxProps {
  isDescription: boolean;
}

export const DescriptionLogoTitleBox = ({
  isDescription,
}: DescriptionLogoTitleBoxProps) => {
  return (
    <div
      className={
        "w-fit max-w-[min(400px,85vw)] flex flex-col justify-center items-center gap-2"
      }
    >
      <div className={"w-16 h-auto"}>
        <AnimatedUlldLogo
          width={64}
          height={64}
          show={isDescription}
          delay={1000}
        />
      </div>
      <h2 className={"text-center text-sm"}>{staticContent.subtitle}</h2>
    </div>
  );
};

DescriptionLogoTitleBox.displayName = "DescriptionLogoTitleBox";
