"use client"
import { MathJaxContext } from "better-react-mathjax";
import React, { ReactNode } from "react";

interface MathjaxProviderProps {
    children: ReactNode;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface WindowEventMap {
    'mathjax-loaded': CustomEvent
  }
}

const MathjaxProvider = ({ children }: MathjaxProviderProps) => {
    return (
        <MathJaxContext
            config={{
                tex: {
                    inlineMath: [["$", "$"]],
                    displayMath: [["$$", "$$"]],
                },
            }}
            src={process.env.NODE_ENV === "production" ? "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" : "/utils/tex-chtml.js"}
            onLoad={() => window.dispatchEvent(new Event("mathjax-loaded"))}
        >
            {children}
        </MathJaxContext>
    );
};

MathjaxProvider.displayName = "MathjaxProvider";

export default MathjaxProvider;
