"use client";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import { MathJax } from "better-react-mathjax";
import React from "react";

interface FeaturedBlogPostEquationProps {
    equation: string;
}

const FeaturedBlogPostEquation = (props: FeaturedBlogPostEquationProps) => {
    return (
        <div className={"w-full grid place-items-center text-foreground p-4 md:p-6 text-[1vw]"}>
            <MathJax hideUntilTypeset="first">
                {props.equation.startsWith("$")
                    ? props.equation
                    : `$$${props.equation}$$`}
            </MathJax>
        </div>
    );
};

FeaturedBlogPostEquation.displayName = "FeaturedBlogPostEquation";

export default FeaturedBlogPostEquation;
