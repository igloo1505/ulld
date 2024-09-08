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
declare const MathjaxProvider: {
    ({ children, className }: MathjaxProviderProps): React.JSX.Element;
    displayName: string;
};
export default MathjaxProvider;
//# sourceMappingURL=mathjax.d.ts.map