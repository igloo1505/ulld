"use client";
import React, { useEffect, useRef, useState } from "react";
import { FeatureContainerProps, FeatureUIStage } from "./types";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useShouldShowFeature } from "./useInitialFeatureDelay";
import { LandingSection } from "#/types/landingSection";

interface FeatureContainerTextProps
  extends Pick<
    FeatureContainerProps,
    "label" | "desc" | "title" | "orientation"
  > {
  idx: number;
    shouldShow: boolean
}

const FeatureContainerText = ({
  label,
  title,
  desc,
  orientation,
  idx,
  shouldShow,
}: FeatureContainerTextProps) => {
  const scope = useRef<HTMLDivElement>(null!);
  const ltr = orientation === "ltr";
  const Desc = desc;
  const Title = title;
  const Label = label;

  if (!shouldShow) {
    return null;
  }

  return (
    <motion.div
      ref={scope}
      className={
        "w-full min-w-[min(400px,calc(100vw-4rem))] flex flex-col justify-center items-start group-[.feature-active]/feature:z-10"
      }
    >
      <motion.h3
        className={clsx(
          "feature-animate opacity-0 text-muted-foreground text-2xl font-semibold mt-2",
          ltr ? "translate-x-[-100px]" : "translate-x-[100px]",
        )}
        initial={{
          x: ltr ? -100 : 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        exit={{
          x: ltr ? -100 : 100,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        }}
      >
        {typeof Label === "function" ? (
          <Label
            orientation={orientation}
            shouldShow={shouldShow}
          />
        ) : (
          Label
        )}
      </motion.h3>
      <motion.h2
        className={clsx(
          "feature-animate opacity-0 text-foreground text-4xl font-bold",
          ltr ? "translate-x-[-100px]" : "translate-x-[100px]",
        )}
        initial={{
          x: ltr ? -100 : 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.25,
          },
        }}
        exit={{
          x: ltr ? -100 : 100,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        }}
      >
        {typeof Title === "function" ? (
          <Title
            orientation={orientation}
            shouldShow={shouldShow}
          />
        ) : (
          Title
        )}
      </motion.h2>
      <motion.p
        className={clsx(
          "feature-animate opacity-0 origin-center text-foreground text-lg mt-4",
        )}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.65,
            duration: 0.5,
            scale: {
              duration: 1,
              type: "spring",
              stiffness: 100,
            },
          },
        }}
        exit={{
          opacity: 0,
          scale: 0,
          transition: {
            delay: 0.65,
            duration: 0.5,
            scale: {
              duration: 1,
              type: "spring",
              stiffness: 100,
            },
          },
        }}
      >
        <Desc
          orientation={orientation}
          shouldShow={shouldShow}
        />
      </motion.p>
    </motion.div>
  );
};

FeatureContainerText.displayName = "FeatureContainerText";

export default FeatureContainerText;
