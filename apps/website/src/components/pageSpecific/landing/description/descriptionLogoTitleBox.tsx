"use client";
import React, { useState, useEffect } from "react";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import staticContent from "../../../../staticData/staticContent.json";
import { motion } from "framer-motion";
import { useViewport } from "@ulld/hooks/useViewport";

interface DescriptionLogoTitleBoxProps {
  isDescription: boolean;
    shouldAnimate: boolean
}

const duration = 2;

export const DescriptionLogoTitleBox = ({
    isDescription,
    shouldAnimate
}: DescriptionLogoTitleBoxProps) => {
  const [shouldShow, setShouldShow] = useState(Boolean(isDescription && !shouldAnimate) ? true : false);
  const viewport = useViewport();

  useEffect(() => {
    if (isDescription) {
      setTimeout(() => {
        setShouldShow(true);
      }, 3000);
    } else {
      setShouldShow(false);
    }
  }, [isDescription]);
  if (!viewport) return null;

  return (
    <>
      <motion.div
        className={"w-16 h-[53px] absolute top-0 left-0"}
        initial={shouldAnimate ? "initial" : "after"}
        animate={shouldShow ? "after" : "initial"}
        variants={{
          initial: {
            translateX: `${viewport?.window?.width! / 2 - 32}px`,
            translateY: `${viewport?.window.height! / 2 - 53}px`,
          },
          after: {
            translateX: "16px",
            translateY: "16px",
            transition: {
              duration: duration,
              type: "spring",
              bounce: 0,
            },
          },
        }}
      >
        <AnimatedUlldLogo
          width={64}
          height={64}
          show={isDescription}
          delay={1000}
          speed={2}
        />
      </motion.div>
      <motion.h2
        initial={shouldAnimate ? "initial" : "after"}
        animate={shouldShow ? "after" : "initial"}
        className={"text-sm w-[350px] absolute top-0 left-0"}
        variants={{
          initial: {
            translateX: `${viewport.window.width / 2 - 175}px`,
            translateY: `${viewport.window.height / 2}px`,
          },
          after: {
            translateX: "88px",
            translateY: "24px",
            transition: {
              duration: duration,
              type: "spring",
              bounce: 0,
            },
          },
        }}
      >
        {staticContent.subtitleBroken[0]}
      </motion.h2>
      <motion.h2
        initial={shouldAnimate ? "initial" : "after"}
        animate={shouldShow ? "after" : "initial"}
        className={"text-sm w-[230px] absolute top-0 left-0"}
        variants={{
          initial: {
            translateX: `${viewport.window.width / 2 - 115}px`,
            translateY: `${viewport.window.height / 2 + 20}px`,
          },
          after: {
            translateX: "88px",
            translateY: "40px",
            transition: {
              duration: duration,
              type: "spring",
              bounce: 0,
            },
          },
        }}
      >
        {staticContent.subtitleBroken[1]}
      </motion.h2>
    </>
  );
};

DescriptionLogoTitleBox.displayName = "DescriptionLogoTitleBox";
