"use client";
import { LogoAsText } from "#/components/general/logoAsText";
import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import { buttonVariants } from "@ulld/tailwind/button";
import Link from "next/link";
import { FeatureDescContainer } from "#/components/pageSpecific/landing/feature/featureDescContainer";
import { slideShowScreenshots } from "./featureAssets/slideShowScreenshots";
import staticContent from "staticContent";
import ImageCarousel from "#/components/media/imageCarousel/main";

const maxIndex = 11;

/* TODO: Come back here and animate this image again. It's currently just swapping without any transition at all. */
/* TODO: Make those images scroll while the description stays fixed when it's flex-row, similar to Vercel's page with that stationary box on the left. */

export const corePluginsFeature: FeaturedContainerPropsRequired = {
  label: "Built to quantize gravity",
  title: "Applicable Everywhere",
  expandDisplay: true,
  displayContainerClasses: "pt-0 md:pt-4 min-h-[30vh]",
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
        <Link
          className={buttonVariants({})}
          href={staticContent.links.demos.myNotes}
        >
          His Notes
        </Link>
      </FeatureDescContainer>
    );
  },
  component: () => {
    return <ImageCarousel
            images={slideShowScreenshots}
            withButtons 
            buttonsBottom
            className={"w-full h-auto min-h-[40vh]"}
            classes={{
                buttonContainer: "justify-center lg:justify-end"
            }}
        />;
  },
};
