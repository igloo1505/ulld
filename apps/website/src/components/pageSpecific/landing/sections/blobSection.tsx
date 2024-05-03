"use client"
import React, {useState, useEffect, useRef} from "react";
import { useLandingSection } from "../useSection";
import NoiseyBlob from "#/components/three/blob/main";
import { LandingPageTitleBox } from "../titleBox";
import clsx from 'clsx'

interface BlobSectionProps {}

export const BlobSection = (props: BlobSectionProps) => {
  const section = useLandingSection();
    /* TODO: Turn this back on to improve performance in production. Was working reasonably well but caused issues when navigating back to the hero section, and now there's another issue I'm trying to debug. */
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
      <NoiseyBlob />
      <LandingPageTitleBox />
    </div>
  );
};

BlobSection.displayName = "BlobSection";
