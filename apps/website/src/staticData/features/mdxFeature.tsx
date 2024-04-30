import { useState } from "react";
import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import mdxScreenshot from "./featureAssets/mdxScreenshot.png";
import mdxScreenshotOutput from "./featureAssets/mdxScreenshotOutput.png";
import Hint from "../../components/general/hint";
import { ImageWithBackground } from "../../components/general/imageWithBackground";



export const mdxFeature: FeaturedContainerPropsRequired = {
    label: "Write in MDX",
    title: "Markdown... Xtended",
    desc: () => {
        return (
            <div className={"w-full h-fit flex flex-col gap-4 md:gap-6"}>
                <div>
                    <span className={"text-brand font-semibold"}> Mdx </span>{" "}
                    {
                        "takes all of the simplicity of markdown and extends it to support React components directly in your notes. Plots, modals, whiteboards, and more are right at your fingertips, in a language that anyone can learn in a single day."
                    }
                </div>
                <Hint>Click the image to view the output.</Hint>
            </div>
        );
    },
    component: () => {
        const [showCode, setShowCode] = useState(true);
        return (
            <div className={"w-full h-full relative"}>
                <ImageWithBackground
                    show={showCode}
                    src={mdxScreenshot}
                    alt="Screenshot of MDX"
                    rotate={-Math.PI / 8}
                    onClick={() => setShowCode(false)}
                />
                <ImageWithBackground
                    show={!showCode}
                    src={mdxScreenshotOutput}
                    alt="Screenshot of MDX"
                    rotate={Math.PI / 6}
                    onClick={() => setShowCode(true)}
                />
            </div>
        );
    },
};
