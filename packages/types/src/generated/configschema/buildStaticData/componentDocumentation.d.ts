import { z } from "zod";
export declare const componentDocumentationSchema: z.ZodObject<{
    pluginName: z.ZodString;
    componentName: z.ZodString;
    embeddableSyntax: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    urls: z.ZodObject<{
        short: z.ZodOptional<z.ZodString>;
        full: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        short?: string;
        full?: string;
    }, {
        short?: string;
        full?: string;
    }>;
    filePaths: z.ZodObject<{
        short: z.ZodOptional<z.ZodString>;
        full: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        short?: string;
        full?: string;
    }, {
        short?: string;
        full?: string;
    }>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    componentId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tags?: string[];
    pluginName?: string;
    componentName?: string;
    embeddableSyntax?: string[];
    urls?: {
        short?: string;
        full?: string;
    };
    filePaths?: {
        short?: string;
        full?: string;
    };
    componentId?: string;
}, {
    tags?: string[];
    pluginName?: string;
    componentName?: string;
    embeddableSyntax?: string[];
    urls?: {
        short?: string;
        full?: string;
    };
    filePaths?: {
        short?: string;
        full?: string;
    };
    componentId?: string;
}>;
