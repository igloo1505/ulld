import React from "react";
import clsx from "clsx";
import MDXArticle from "#/components/layouts/mdxArticle";
import { getPages } from "sources/brand";
import { getPageById } from "#/fumaDocs/utils/getPageById";
import StoryOfUlldHeading from "./storyOfUlldHeading";



interface StoryOfUlldSectionProps { 
}


export const StoryOfUlldSection = ({}: StoryOfUlldSectionProps) => {
    const content = getPageById(getPages(), "storyOfULLD")
    if(!content){
        throw new Error("No storyOfUlld article found.")
    }
    /* const vp = useViewport(); */
    /* RESUME: Come back here and move this to a single internal hook to populate all of the components as needed. */
    /* const ref = useRef<HTMLDivElement>(null!); */
    /* const inView = useInView(ref, { margin: "-20%" }); */
    return (
        <div
            className={clsx(
                "group/feature relative w-screen left-0 min-h-[calc(100vh-76px)] h-fit flex flex-col justify-start items-center gap-6 z-10"
            )}
        >
            <StoryOfUlldHeading 
            />
            <MDXArticle
                hideSourceButton
                paddingTop={false}
                id="storyOfULLD"
                data={content}
                className={"mt-20 max-w-[min(83vw,1440px)]"}
            />
        </div>
    );
};

StoryOfUlldSection.displayName = "StoryOfUlldSection";
