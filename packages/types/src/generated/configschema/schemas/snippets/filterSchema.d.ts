import { z } from "zod";
export declare const snippetFilterSchema: z.ZodObject<{
    language: z.ZodOptional<z.ZodNativeEnum<{
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
    query: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    language?: "latex" | "css" | "node" | "python" | "react" | "swift" | "tailwind" | "javascript" | "lua" | "typescript" | "scss" | "prisma" | "bash" | "zsh" | "bibtex" | "json" | "applescript" | undefined;
    query?: string | undefined;
}, {
    language?: "latex" | "css" | "node" | "python" | "react" | "swift" | "tailwind" | "javascript" | "lua" | "typescript" | "scss" | "prisma" | "bash" | "zsh" | "bibtex" | "json" | "applescript" | undefined;
    query?: string | undefined;
}>;
export type SnippetFilterParam = z.input<typeof snippetFilterSchema>;
//# sourceMappingURL=filterSchema.d.ts.map