"use client"
import React, {useState, useEffect} from "react";
import { useLandingSection, useSection } from "../useSection";
import NoiseyBlob from "#/components/three/blob/main";
import { LandingPageTitleBox } from "../titleBox";
import clsx from 'clsx'
import { getLandingSectionClass } from "#/types/landingSection";

interface BlobSectionProps {}

export const BlobSection = (props: BlobSectionProps) => {
  const section = useLandingSection();
    const [shouldShow, setShouldShow] = useState(true)
    useEffect(() => {
       if(section === "hero"){
            setShouldShow(true)
        } else {
            setTimeout(() => setShouldShow(false), 5000)
        }
    }, [section])

  return (
    <div className={clsx("z-10")}>
      {shouldShow && <NoiseyBlob />}
      <LandingPageTitleBox />
    </div>
  );
};

BlobSection.displayName = "BlobSection";
