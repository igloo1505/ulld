import { z } from "zod";
export declare const componentDocumentationSchema: z.ZodObject<{
    pluginName: z.ZodString;
    componentName: z.ZodString;
    embeddableSyntax: z.ZodArray<z.ZodString, "many">;
    paths: z.ZodObject<{
        short: z.ZodOptional<z.ZodString>;
        full: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        short?: string | undefined;
        full?: string | undefined;
    }, {
        short?: string | undefined;
        full?: string | undefined;
    }>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    tags: string[];
    pluginName: string;
    componentName: string;
    embeddableSyntax: string[];
    paths: {
        short?: string | undefined;
        full?: string | undefined;
    };
}, {
    pluginName: string;
    componentName: string;
    embeddableSyntax: string[];
    paths: {
        short?: string | undefined;
        full?: string | undefined;
    };
    tags?: string[] | undefined;
}>;
//# sourceMappingURL=componentDocumentation.d.ts.map