import React from "react";
export type MathJaxLoaders = "svg" | "chtml" | "config";
export type InitialLoaderProps = {
    requireJs?: boolean;
    mathjax?: MathJaxLoaders[] | "all";
    latex?: boolean;
};
export declare const InitialLoader: ({ requireJs, latex, mathjax }: InitialLoaderProps) => React.JSX.Element;
//# sourceMappingURL=initialLoader.d.ts.map