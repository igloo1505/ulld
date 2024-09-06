import { withForwardSlash } from "./fsUtils.js";
import monacoLanguages from "../monaco/languages.js";

export interface EditorModalConfig {
    language?: (typeof monacoLanguages)[number] | "mdx";
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
    return `/editor/${encodeURI(config.contentId)}?${sp.toString()}`;
};
