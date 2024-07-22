import { MathJax } from "better-react-mathjax";
import React from "react";

interface BlogSummaryEquationProps {
    equation: string;
}

const BlogSummaryEquation = (props: BlogSummaryEquationProps) => {
    return (
        <div
            className={
                "w-full grid place-items-center text-foreground p-4 md:p-6 text-[1vw]"
            }
        >
            <MathJax hideUntilTypeset="first">
                {props.equation.startsWith("$")
                    ? props.equation
                    : `$$${props.equation}$$`}
            </MathJax>
        </div>
    );
};

BlogSummaryEquation.displayName = "BlogSummaryEquation";

export default BlogSummaryEquation;
