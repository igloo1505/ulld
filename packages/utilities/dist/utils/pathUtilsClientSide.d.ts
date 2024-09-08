import monacoLanguages from "../monaco/languages.js";
export interface EditorModalConfig {
    language?: (typeof monacoLanguages)[number] | "mdx";
    contentId: string;
    useExistingValue?: boolean;
}
export declare const includesRoot: (p: string, fsRoot: string) => boolean;
export declare const makeAbsolute: (p: string, fsRoot: string) => string;
export declare const getEditorUrl: (config: EditorModalConfig) => string;
//# sourceMappingURL=pathUtilsClientSide.d.ts.map