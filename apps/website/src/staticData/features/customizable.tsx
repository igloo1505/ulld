"use client"
import { LogoAsText } from "#/components/general/logoAsText";
import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from 'clsx'
import FeatureMiniCardContainer from "#/components/pageSpecific/landing/featureMinicard/featureMiniCardContainer";
import { ForwardedRef, forwardRef } from "react";


export const customizableFeature: FeaturedContainerPropsRequired = {
  label: "Customize Endlessly",
  title: "1 config to rule them all",
  override: forwardRef(({ orientation, shouldShow }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <motion.div
        ref={ref}
        className={clsx("max-w-[min(83%,1080px)]", shouldShow && "z-10")}
        initial="hide"
        animate={shouldShow ? "show" : "hide"}
        variants={{
          show: {
            opacity: 1,
          },
          hide: {
            opacity: 0,
          },
        }}
      >
        <motion.h1
          initial="hide"
          animate={shouldShow ? "show" : "hide"}
          variants={{
            hide: {
              opacity: 0,
              x: orientation === "ltr" ? -100 : 100,
            },
            show: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.25,
              },
            },
          }}
          className={"text-4xl md:text-6xl font-bold"}
        >
          1 config to rule them all.
        </motion.h1>
        <motion.p
          className={"text-muted-foreground font-bold my-6 lg:w-5/6"}
          initial="hide"
          animate={shouldShow ? "show" : "hide"}
          variants={{
            hide: {
              opacity: 0,
              scale: 0,
            },
            show: {
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
            },
          }}
        >
        From the beginning <LogoAsText fontSize={16} /> was built to be extended
        with one configuration file providing a single source of truth
        throughout your application. <LogoAsText fontSize={16} /> offers a{" "}
        <span className={"text-foreground"}>Typescript</span> and{" "}
        <span className={"text-foreground"}>JSON</span> interface for those that
        are comfortable writing their own configuration, but a graphical
        interface for configuring your workspace is{" "}
        <Link href="/sponsor" className={"text-link"}>
          just around the corner
        </Link>
        .
        </motion.p>
        <FeatureMiniCardContainer show={shouldShow} orientation={orientation}/>
      </motion.div>
    );
  }),
  desc: () => null,
  component: () => null,
};
