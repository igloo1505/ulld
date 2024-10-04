import { MathJaxContextProps } from "better-react-mathjax";
import React, { ReactNode } from "react";
interface MathjaxProviderProps {
    children: ReactNode;
    className?: string;
}
declare global {
    interface WindowEventMap {
        "mathjax-loaded": CustomEvent;
    }
}
export declare const mathJaxOptions: MathJaxContextProps;
declare const MathjaxProvider: {
    ({ children, className }: MathjaxProviderProps): React.JSX.Element;
    displayName: string;
};
export default MathjaxProvider;
//# sourceMappingURL=mathjax.d.ts.map