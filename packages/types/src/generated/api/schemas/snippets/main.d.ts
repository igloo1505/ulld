import { z } from 'zod';
export declare const SnippetCreatekeywordsInputObjectSchema: z.ZodObject<{
    set: z.ZodArray<z.ZodString, "many">;
}, "strict", z.ZodTypeAny, {
    set: string[];
}, {
    set: string[];
}>;
export declare const TechnologiesSchema: z.ZodNativeEnum<{
    python: "python";
    javascript: "javascript";
    lua: "lua";
    typescript: "typescript";
    css: "css";
    scss: "scss";
    react: "react";
    prisma: "prisma";
    tailwind: "tailwind";
    node: "node";
    bash: "bash";
    zsh: "zsh";
    bibtex: "bibtex";
    latex: "latex";
    json: "json";
    applescript: "applescript";
    swift: "swift";
}>;
export declare const SnippetCreateInputObjectSchema: z.ZodObject<{
    content: z.ZodString;
    description: z.ZodString;
    keywords: z.ZodOptional<z.ZodUnion<[z.ZodLazy<z.ZodObject<{
        set: z.ZodArray<z.ZodString, "many">;
    }, "strict", z.ZodTypeAny, {
        set: string[];
    }, {
        set: string[];
    }>>, z.ZodArray<z.ZodString, "many">]>>;
    language: z.ZodLazy<z.ZodNativeEnum<{
        python: "python";
        javascript: "javascript";
        lua: "lua";
        typescript: "typescript";
        css: "css";
        scss: "scss";
        react: "react";
        prisma: "prisma";
        tailwind: "tailwind";
        node: "node";
        bash: "bash";
        zsh: "zsh";
        bibtex: "bibtex";
        latex: "latex";
        json: "json";
        applescript: "applescript";
        swift: "swift";
    }>>;
    id: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    content: string;
    description: string;
    language: "latex" | "css" | "node" | "python" | "react" | "swift" | "tailwind" | "javascript" | "lua" | "typescript" | "scss" | "prisma" | "bash" | "zsh" | "bibtex" | "json" | "applescript";
    keywords?: string[] | {
        set: string[];
    } | undefined;
    id?: number | undefined;
}, {
    content: string;
    description: string;
    language: "latex" | "css" | "node" | "python" | "react" | "swift" | "tailwind" | "javascript" | "lua" | "typescript" | "scss" | "prisma" | "bash" | "zsh" | "bibtex" | "json" | "applescript";
    keywords?: string[] | {
        set: string[];
    } | undefined;
    id?: number | undefined;
}>;
//# sourceMappingURL=main.d.ts.map