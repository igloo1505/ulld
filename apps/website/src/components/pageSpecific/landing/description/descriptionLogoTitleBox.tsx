"use client";
import React, { ForwardedRef, forwardRef } from "react";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import staticContent from "../../../../staticData/staticContent.json";
import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";
import { useViewport } from "@ulld/hooks/useViewport";

interface DescriptionLogoTitleBoxProps {
  sectionIndex: number;
    setTitleReady: () => void
}

const translateDuration = 0.8;
const logoDelay = 1000;
const delay = 0.8;
const delay2 = 3;

export type CompleteAnimRef = HTMLHeadingElement

export const DescriptionLogoTitleBox = ({
  sectionIndex: idx,
    setTitleReady
}: DescriptionLogoTitleBoxProps) => {
  const viewport = useViewport();

  if (!viewport || idx <= 0) return null;

  return (
    <>
      <motion.div
        className={"w-16 h-[53px] absolute top-0 left-0"}
        initial={{
          opacity: 1,
          scale: 1,
          translateX: `${viewport?.window?.width! / 2 - 32}px`,
          translateY: `${viewport?.window.height! / 2 - 53}px`,
        }}
        exit={{
          opacity: 0,
          scale: 0,
          translateX: "16px",
          translateY: "16px",
        }}
        animate={{
          opacity: 1,
          translateX: "16px",
          translateY: "16px",
          transition: {
            type: "spring",
            bounce: 0,
            translateX: {
              duration: translateDuration,
              delay: delay2,
            },
            translateY: {
              duration: translateDuration,
              delay: delay2,
            },
          },
        }}
      >
        <AnimatedUlldLogo
          width={64}
          height={64}
          show={idx > 0}
          delay={logoDelay}
          speed={2}
        />
      </motion.div>
      <motion.h2
        initial={{
          translateX: `${viewport.window.width / 2 - 175}px`,
          translateY: `${viewport.window.height / 2}px`,
          opacity: 0,
        }}
        animate={{
          translateX: "88px",
          translateY: "24px",
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0,
            opacity: {
              delay: 0.5,
            },
            translateX: {
              duration: translateDuration,
              delay: delay2,
            },
            translateY: {
              duration: translateDuration,
              delay: delay2,
            },
          },
        }}
        exit={{
          opacity: 0,
          scale: 0,
          translateX: "-50vw",
          translateY: "24px",
        }}
        className={"text-sm w-[350px] absolute top-0 left-0"}
      >
        {staticContent.subtitleBroken[0]}
      </motion.h2>
      <motion.h2
        initial={{
          translateX: `${viewport.window.width / 2 - 115}px`,
          translateY: `${viewport.window.height / 2 + 20}px`,
          opacity: 0,
        }}
        animate={{
          translateX: "88px",
          translateY: "40px",
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0,
            opacity: {
              delay: 0.5,
            },
            translateX: {
              duration: translateDuration,
              delay: delay2,
            },
            translateY: {
              duration: translateDuration,
              delay: delay2,
            },
          },
        }}
        exit={{
          opacity: 0,
          scale: 0,
          translateX: "-50vw",
          translateY: "40px",
        }}
        className={"text-sm w-[230px] absolute top-0 left-0"}
        onAnimationComplete={setTitleReady}
      >
        {staticContent.subtitleBroken[1]}
      </motion.h2>
    </>
  );
};

DescriptionLogoTitleBox.displayName = "DescriptionLogoTitleBox";


