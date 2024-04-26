import { useState } from "react";
import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import NextImage from "next/image";
import mdxScreenshot from "./featureAssets/mdxScreenshot.png";
import mdxScreenshotOutput from "./featureAssets/mdxScreenshotOutput.png";
import { motion } from "framer-motion";
import Hint from "#/components/general/hint";

const Image = motion(NextImage);

export const mdxFeature: FeaturedContainerPropsRequired = {
    label: "Write in MDX",
    title: "Markdown... Xtended",
    desc: () => {
        return (
            <div className={"w-full h-fit flex flex-col gap-4 md:gap-6"}>
            <div> 
            <span className= { "text-brand font-semibold"} > Mdx </span> {"takes all of the simplicity of markdown and extends it to support React components directly in your notes. Plots, modals, whiteboards, and more are right at your fingertips, in a language that anyone can learn in a single day."}
            </div>
                <Hint>
Click the image to view the output.
                </Hint>
      </div>
    );
  },
component: () => {
    const [showCode, setShowCode] = useState(true);
    return (
        <div className={"w-full h-full relative"}>
        <Image
          src= { mdxScreenshot }
    alt = "Screenshot of MDX"
    className = { "max-h-[calc(100vh-4rem)] cursor-pointer absolute w-full top-0 left-0" }
onClick = {() => setShowCode(false)}
initial = "showCode"
animate = { showCode ? "showCode": "showExample" }
variants = {{
        showCode: { 
           y: 0,
           scale: 1,
            transition: {
                bounce: 0
            }
        },
        showExample: {
            y: -500,
            scale: 0,
        },
}}
/>
    <Image
src = { mdxScreenshotOutput }
alt = "Screenshot of MDX"
className = { "max-h-[calc(100vh-4rem)] cursor-pointer absolute top-0 left-0"}
onClick = {() => setShowCode(true)}
initial = "showCode"
animate = { showCode? "showCode": "showExample" }
variants = {{
        showCode: { 
           y: 500,
           scale: 0,
            opacity: 0
        },
        showExample: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
bounce: 0
                            }
            },
}}
/>
    </div>
    );
  },
};
