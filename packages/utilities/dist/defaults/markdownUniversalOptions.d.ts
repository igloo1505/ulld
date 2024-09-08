import { MermaidConfigType } from "./defaultMermaidConfig.js";
interface MathOptionsType {
    tex: {
        tags?: "all" | "ams" | "none";
        useLabelIds?: boolean;
        processEscapes?: boolean;
        processEnvironments?: boolean;
    };
    chtml: {
        fontURL: string;
        adaptiveCSS?: boolean;
    };
}
export declare const mathOptions: MathOptionsType;
export declare const mermaidConfig: MermaidConfigType;
export {};
//# sourceMappingURL=markdownUniversalOptions.d.ts.map