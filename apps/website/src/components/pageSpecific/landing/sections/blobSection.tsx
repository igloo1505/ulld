"use client"
import React, {useState, useEffect, useRef} from "react";
import { useLandingSection, useSection } from "../useSection";
import NoiseyBlob from "#/components/three/blob/main";
import { LandingPageTitleBox } from "../titleBox";
import clsx from 'clsx'
import { getLandingSectionClass } from "#/types/landingSection";

interface BlobSectionProps {}

export const BlobSection = (props: BlobSectionProps) => {
  const section = useLandingSection();
    const [shouldShow, setShouldShow] = useState(true)
    const timer = useRef<null | NodeJS.Timeout>(null)
    useEffect(() => {
       if(section === "hero"){
            if(timer.current){
                clearTimeout(timer.current)
            }
            setShouldShow(true)
        } else {
            const _timer = setTimeout(() => setShouldShow(false), 5000)
            timer.current = _timer
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
