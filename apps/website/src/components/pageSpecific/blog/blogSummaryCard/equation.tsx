import { MdxContentRSC } from "@ulld/render/mdx-rsc"
import React from "react";

interface BlogSummaryEquationProps {
    equation: string;
}

const BlogSummaryEquation = (props: BlogSummaryEquationProps) => {
    return (
        <div
            className="w-full h-full flex flex-col justify-center items-center text-foreground p-4 md:p-6 text-[1vw] not-prose [&_p]:w-fit [&_p]:h-fit [&_p]:leading-none"
        >
            <MdxContentRSC
                notProse
                className="flex flex-col justify-center items-center w-full max-h-full"
                content={props.equation.startsWith("$")
                    ? props.equation
                    : `$$${props.equation}$$`}
            />
        </div>
    );
};

BlogSummaryEquation.displayName = "BlogSummaryEquation";

export default BlogSummaryEquation;
