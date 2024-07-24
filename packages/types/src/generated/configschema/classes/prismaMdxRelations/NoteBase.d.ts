import type { Route } from "next";
import { ParsableExtensions } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions";
export declare class NoteBase {
    rootRelativePath?: string | null;
    ftExtension: string;
    constructor(rootRelativePath?: string | null, extension?: ParsableExtensions);
    getHref(): Route | undefined;
    parseQuickLinks(content: string): Promise<{
        content: string;
        links: string[];
    }>;
    getLinkShortcutRegex(k: string): RegExp;
    parseLinkShortcuts(content: string): string;
    formatTag(s: string): string;
    formatCitation(s: string, index: number): string;
    formatVideoTimestampLink(m: RegExpExecArray): string;
    parseVideoTimeLinks(content: string): {
        content: string;
    };
    parseTags(content: string): {
        content: string;
        results: string[];
    };
    parseEquationTags(content: string): string;
    getEquationIds(content?: string | null): string[];
    getDefinitionAnchorHtml(m: RegExpExecArray): string;
    parseDefinitionTags(content: string): {
        content: string;
        definitions: {
            id: string;
            content?: string;
            label?: string;
        }[];
    };
}
//# sourceMappingURL=NoteBase.d.ts.map