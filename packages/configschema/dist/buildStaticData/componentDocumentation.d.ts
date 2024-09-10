import { z } from "zod";
export declare const componentDocumentationSchema: z.ZodObject<{
    pluginName: z.ZodString;
    componentName: z.ZodString;
    embeddableSyntax: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    urls: z.ZodObject<{
        short: z.ZodOptional<z.ZodString>;
        full: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        short?: string | undefined;
        full?: string | undefined;
    }, {
        short?: string | undefined;
        full?: string | undefined;
    }>;
    filePaths: z.ZodObject<{
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
    componentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tags: string[];
    pluginName: string;
    componentName: string;
    embeddableSyntax: string[];
    urls: {
        short?: string | undefined;
        full?: string | undefined;
    };
    filePaths: {
        short?: string | undefined;
        full?: string | undefined;
    };
    componentId: string;
}, {
    pluginName: string;
    componentName: string;
    urls: {
        short?: string | undefined;
        full?: string | undefined;
    };
    filePaths: {
        short?: string | undefined;
        full?: string | undefined;
    };
    componentId: string;
    embeddableSyntax?: string[] | undefined;
    tags?: string[] | undefined;
}>;
//# sourceMappingURL=componentDocumentation.d.ts.map