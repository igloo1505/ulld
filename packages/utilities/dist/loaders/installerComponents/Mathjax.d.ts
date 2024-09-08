import React from 'react';
import { ScriptProps } from "next/script";
import { MathJaxLoaders } from "./initialLoader.js";
export declare const MathjaxSvgLoader: () => React.JSX.Element;
export declare const MathjaxChtmlLoader: () => React.JSX.Element;
interface Props extends Omit<ScriptProps, "type"> {
    type?: MathJaxLoaders[] | "all";
}
export declare const MathjaxConfigScript: () => React.JSX.Element;
export declare const MathjaxLoader: {
    ({ type }: Props): React.JSX.Element;
    displayName: string;
};
export default MathjaxLoader;
//# sourceMappingURL=Mathjax.d.ts.map