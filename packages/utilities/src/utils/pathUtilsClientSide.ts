import { withForwardSlash } from "./fsUtils";
import monacoLanguages from "../monaco/languages";

export interface EditorModalConfig {
    language?: (typeof monacoLanguages)[number];
    contentId: string;
    useExistingValue?: boolean;
}

export const includesRoot = (p: string, fsRoot: string) => {
    return p.includes(fsRoot);
};

export const makeAbsolute = (p: string, fsRoot: string) => {
    return p.includes(fsRoot) ? p : `${fsRoot}${withForwardSlash(p)}`;
};

export const getEditorUrl = (config: EditorModalConfig) => {
    const sp = new URLSearchParams();
    sp.set("language", config.language || "mdx");
    if (config.useExistingValue) {
        sp.set("useExistingValue", "true");
    }
    return `/editor/${config.contentId}?${sp.toString()}`;
};
