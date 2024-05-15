"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useViewport } from "@ulld/hooks/useViewport";
import { AnimatedLogoAsText } from "#/components/general/animatedLogoAsText";
import { orderedSections } from "#/types/landingSection";
import { allStoryOfULLDs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import _MDXArticle from "#/components/layouts/mdxArticle";

const MDXArticle = motion(_MDXArticle)

const storyOfUlld = Array.isArray(allStoryOfULLDs)
  ? allStoryOfULLDs[0]
  : allStoryOfULLDs;

interface StoryOfUlldSectionProps {
  sectionIndex: number;
}

const heading = "The story of ";

export const StoryOfUlldSection = ({
  sectionIndex,
}: StoryOfUlldSectionProps) => {
  const shouldShow = useMemo(
    () => orderedSections.indexOf("story") === sectionIndex,
    [sectionIndex],
  );
  const vp = useViewport();
  /* RESUME: Come back here and move this to a single internal hook to populate all of the components as needed. */
  const StoryOfULLD = useMDXComponent(storyOfUlld.body.code);
  if (!shouldShow) {
    return null;
  }

  return (
    <div
      className={clsx(
        "absolute group/feature w-screen top-[76px] left-0 min-h-[calc(100vh-76px)] h-fit flex flex-col justify-start items-center gap-6 z-10",
        vp?.window.width && vp.window.width < 768 ? "stack" : "flow",
      )}
    >
      <motion.h2
        className={
          "feature-animate opacity-0 text-foreground text-4xl font-bold absolute"
        }
        initial={{
          y: "-100px",
          opacity: 0,
        }}
        animate={{
          y: "0px",
          opacity: 1,
          transition: {
            duration: 1,
            top: {
              delay: 2.5,
              type: "spring",
            },
          },
        }}
      >
        {heading.split("").map((l, i) => {
          return (
            <motion.span
              key={i}
              initial={{
                y: -30,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.25 + i * 0.1,
                },
              }}
            >
              {l}
            </motion.span>
          );
        })}
        <AnimatedLogoAsText show={shouldShow} delay={1.4} fontSize={36} />
      </motion.h2>
      <MDXArticle
        id="storyOfULLD"
        className={"mt-20 max-w-[min(83vw,1440px)]"}
        initial={{
          opacity: 0,
          /* y: "100vh", */
          /* scale: 0, */
        }}
        variants={{
          hide: {
            /* y: "100vh", */
            /* scale: 0, */
            opacity: 0,
          },
          show: {
            /* y: 0, */
            /* scale: 1, */
            opacity: 1,
          },
        }}
        animate={shouldShow ? "show" : "hide"}
        transition={{
          delay: 1.75,
          /* bounce: 0, */
          duration: 0.75,
        }}
      >
          <StoryOfULLD />
      </MDXArticle>
    </div>
  );
};

StoryOfUlldSection.displayName = "StoryOfUlldSection";
