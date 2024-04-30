import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import { LogoAsText } from "#/components/general/logoAsText";
import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import corePluginImage1 from "./featureAssets/corePluginScreenshots/corePlugin1.png";
import corePluginImage2 from "./featureAssets/corePluginScreenshots/corePlugin2.png";
import corePluginImage3 from "./featureAssets/corePluginScreenshots/corePlugin3.png";
import corePluginImage4 from "./featureAssets/corePluginScreenshots/corePlugin4.png";
import corePluginImage5 from "./featureAssets/corePluginScreenshots/corePlugin5.png";
import corePluginImage6 from "./featureAssets/corePluginScreenshots/corePlugin6.png";
import corePluginImage7 from "./featureAssets/corePluginScreenshots/corePlugin7.png";
import corePluginImage8 from "./featureAssets/corePluginScreenshots/corePlugin8.png";
import corePluginImage9 from "./featureAssets/corePluginScreenshots/corePlugin9.png";
import corePluginImage10 from "./featureAssets/corePluginScreenshots/corePlugin10.png";
import corePluginImage11 from "./featureAssets/corePluginScreenshots/corePlugin11.png";
import { Variants, motion } from "framer-motion";
import { buttonVariants } from "@ulld/tailwind/button";
import Link from "next/link";
import { FeatureDescContainer } from "#/components/pageSpecific/landing/feature/featureDescContainer";
const maxIndex = 11;
const Image = motion(NextImage);

const imageClasses =
  "absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-h-full max-w-full object-contain";

export const corePluginsFeature: FeaturedContainerPropsRequired = {
  label: "Built to quantize gravity",
  title: "Applicable Everywhere",
  desc: () => {
    return (
      <FeatureDescContainer>
        <span>
          <LogoAsText fontSize={18} /> was built by a single developer with a
          background in physics to handle his own research after becoming
          frustrated with other options. There's out of the box support for
          equations, snippets, bibliography management, task lists, whiteboards,
          and much, <em>much</em> more.
        </span>
        <Link className={buttonVariants({})} href="/gravity">
          His Notes
        </Link>
      </FeatureDescContainer>
    );
  },
  component: ({ shouldShow, section }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const timer = useRef<NodeJS.Timeout | null>(null);
    const shouldAbort = useRef<boolean>(false);
    const cycleImages = (idx: number = 1) => {
      const nextIndex = idx >= maxIndex ? 1 : idx + 1;
      setCurrentIndex(nextIndex);
      console.log("shouldAbort.current: ", shouldAbort.current);
      if (!shouldAbort.current) {
        const _timer = setTimeout(() => {
          cycleImages(nextIndex);
        }, 5000);
        timer.current = _timer;
      }
    };

    useEffect(() => {
      if (shouldShow) {
        shouldAbort.current = false;
        cycleImages();
      } else {
        shouldAbort.current = true;
        if (timer.current) {
          clearTimeout(timer.current);
        }
      }
    }, [shouldShow]);

    const handleClick = () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      cycleImages(currentIndex);
    };

    const imageVariants: Variants = {
      hide: {
        opacity: 0,
        x: "-50%",
        y: "-50%",
        transition: {
          duration: 0,
        },
      },
      show: {
        opacity: 1,
        x: "-50%",
        y: "-50%",
        transition: {
          duration: 1,
          type: "linear",
        },
      },
    };
    return (
      <div
        className={
          "w-full h-full relative max-h-[40vh] md:max-h-[80vh] group-[.stack]/feature:max-h-[40vh] group-[.flow]/feature:max-h-[80vh] object-contain"
        }
      >
        <Image
          onClick={handleClick}
          src={corePluginImage1}
          initial="show"
          variants={imageVariants}
          animate={currentIndex === 1 ? "show" : "hide"}
          alt="Core Plugin Image"
          className={imageClasses}
        />
        <Image
          onClick={handleClick}
          className={imageClasses}
          src={corePluginImage2}
          initial="hide"
          variants={imageVariants}
          animate={currentIndex === 2 ? "show" : "hide"}
          alt="Core Plugin Image"
        />
        <Image
          onClick={handleClick}
          className={imageClasses}
          src={corePluginImage3}
          initial="hide"
          variants={imageVariants}
          animate={currentIndex === 3 ? "show" : "hide"}
          alt="Core Plugin Image"
        />
        <Image
          onClick={handleClick}
          className={imageClasses}
          src={corePluginImage4}
          initial="hide"
          variants={imageVariants}
          animate={currentIndex === 4 ? "show" : "hide"}
          alt="Core Plugin Image"
        />
        <Image
          onClick={handleClick}
          className={imageClasses}
          src={corePluginImage5}
          initial="hide"
          variants={imageVariants}
          animate={currentIndex === 5 ? "show" : "hide"}
          alt="Core Plugin Image"
        />
        <Image
          onClick={handleClick}
          className={imageClasses}
          src={corePluginImage6}
          initial="hide"
          variants={imageVariants}
          animate={currentIndex === 6 ? "show" : "hide"}
          alt="Core Plugin Image"
        />
        <Image
          onClick={handleClick}
          className={imageClasses}
          src={corePluginImage7}
          initial="hide"
          variants={imageVariants}
          animate={currentIndex === 7 ? "show" : "hide"}
          alt="Core Plugin Image"
        />
        <Image
          onClick={handleClick}
          className={imageClasses}
          src={corePluginImage8}
          initial="hide"
          variants={imageVariants}
          animate={currentIndex === 8 ? "show" : "hide"}
          alt="Core Plugin Image"
        />
        <Image
          onClick={handleClick}
          className={imageClasses}
          src={corePluginImage9}
          initial="hide"
          variants={imageVariants}
          animate={currentIndex === 9 ? "show" : "hide"}
          alt="Core Plugin Image"
        />
        <Image
          onClick={handleClick}
          className={imageClasses}
          src={corePluginImage10}
          initial="hide"
          variants={imageVariants}
          animate={currentIndex === 10 ? "show" : "hide"}
          alt="Core Plugin Image"
        />
        <Image
          onClick={handleClick}
          className={imageClasses}
          src={corePluginImage11}
          initial="hide"
          variants={imageVariants}
          animate={currentIndex === 11 ? "show" : "hide"}
          alt="Core Plugin Image"
        />
      </div>
    );
  },
};
