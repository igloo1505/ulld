"use client";
import { useViewport } from "@ulld/hooks/useViewport";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import clsx from "clsx";
import SponsorLogoSampleCard from "./sponsorLogoSampleCard";
import AddSponsorCard from "./addSponsorCard";

interface MainSponsorSectionProps {}

export const MainSponsorSection = (props: MainSponsorSectionProps) => {
  const vp = useViewport();
  const ref = useRef<HTMLDivElement>(null!);

  return (
    <div
      ref={ref}
      className={clsx(
        "group/feature relative w-screen left-0 min-h-[calc(100vh-76px)] h-fit flex flex-col justify-start items-center gap-6 z-10 mb-12",
        vp?.window.width && vp.window.width < 768 ? "stack" : "flow",
      )}
    >
      <motion.h1
        className="relative md:w-full md:max-w-5/6 z-10 text-[9vw] md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-primary text-center font-sans font-bold"
        whileInView={"animate"}
        initial="initial"
        viewport={{
          once: true,
          margin: "20px",
        }}
      >
        {"Sponsor".split("").map((l, i) => (
          <motion.span
            className={"inline-block"}
            key={`sponsor-${i}`}
            variants={{
              initial: {
                y: 100,
                scale: 0,
              },
              animate: {
                y: 0,
                scale: 1,
                transition: {
                  delay: i * 0.15,
                },
              },
            }}
          >
            {l}
          </motion.span>
        ))}
      </motion.h1>
      <div
        className={
          "w-full h-fit flex flex-col lg:flex-row flex-wrap gap-x-8 gap-y-6 max-w-[min(768px,90vw)]"
        }
      >
        <SponsorLogoSampleCard isPrimary />
        <SponsorLogoSampleCard />
        <SponsorLogoSampleCard />
        <SponsorLogoSampleCard />
        <AddSponsorCard />
      </div>
    </div>
  );
};

MainSponsorSection.displayName = "MainSponsorSection";
