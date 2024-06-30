import { MathJax } from "better-react-mathjax";
import React, { ReactNode } from "react";


export interface AbstractProps {
    children: ReactNode;
}


export const Abstract = ({ children }: AbstractProps) => {
    return (
        <MathJax>
            <div
                className={"w-full h-fit flex justify-center items-center mt-8 mb-12"}
            >
                <div
                    className={
                        "bg-secondary text-secondary-foreground w-fit md:max-w-[min(83%,1080px)] rounded-md border"
                    }
                >
                    <div
                        className={
                            "w-full text-semibold text-lg px-4 py-2 border-b-2 border-secondary-foreground/20"
                        }
                    >
                        Abstract
                    </div>
                    <div className={"p-4 prose dark:prose-invert"}>{children}</div>
                </div>
            </div>
        </MathJax>
    );
};

Abstract.displayName = "Abstract";
