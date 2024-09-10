import { CSSProperties, HTMLProps } from "react";
export interface BaseEmbeddableComponentProps<T extends HTMLElement> extends HTMLProps<T> {
    /** Whether component should expand to occupy the entire available space. */
    fitParent?: boolean;
    /** Alias for fitParent */
    fitContainer?: boolean;
}
interface FormattedBaseComponentProps<T extends HTMLElement> extends BaseEmbeddableComponentProps<T> {
    [k: string]: any;
}
export declare const getBaseEmbeddableProps: <T extends HTMLElement>(d: BaseEmbeddableComponentProps<T>, defaultClassNames?: string, defaultStyles?: CSSProperties) => FormattedBaseComponentProps<T>;
export {};
//# sourceMappingURL=getBaseEmbeddableProps.d.ts.map