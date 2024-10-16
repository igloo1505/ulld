"use client";
import { MathJaxContext, MathJaxContextProps } from "better-react-mathjax";
import React, { ReactNode } from "react";

interface MathjaxProviderProps {
    children: ReactNode;
    className?: string;
}

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "mathjax-loaded": CustomEvent;
    }
}

export const mathJaxOptions: MathJaxContextProps = {
    config: {
        tex: {
            inlineMath: [["$", "$"]],
            displayMath: [["$$", "$$"]],
        },
        startup: {
            ready: () => {
                /* @ts-ignore */
                MathJax.startup.defaultReady();
                /* @ts-ignore */
                MathJax.startup.promise.then(() => {
                    window.dispatchEvent(new CustomEvent("mathjax-loaded"));
                });
            },
        },
    },
    src:
        process.env.NODE_ENV === "production"
            ? "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
            : "/utils/tex-chtml.js",
    onLoad: () => {
        window.dispatchEvent(new CustomEvent("mathjax-loaded"));
        console.log(`Mathjax loaded...`);
    },
};

const MathjaxProvider = ({ children, className }: MathjaxProviderProps) => {
    return (
        <MathJaxContext
            {...mathJaxOptions}
        >
            {className ? <div className={className}>{children}</div> : children}
        </MathJaxContext>
    );
};

MathjaxProvider.displayName = "MathjaxProvider";

export default MathjaxProvider;
