import { z } from "zod";
export declare const embeddableConfigSchema: z.ZodEffects<z.ZodObject<{
    regexToInclude: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    label?: string;
    regexToInclude?: string;
}, {
    label?: string;
    regexToInclude?: string;
}>, {
    label: string;
    regexToInclude?: string;
}, {
    label?: string;
    regexToInclude?: string;
}>;
export declare const componentConfigSchema: z.ZodObject<{
    componentName: z.ZodEffects<z.ZodString, string, string>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    slot: z.ZodOptional<z.ZodString>;
    export: z.ZodEffects<z.ZodString, string, string>;
    embeddable: z.ZodEffects<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodEffects<z.ZodObject<{
        regexToInclude: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        regexToInclude?: string;
    }, {
        label?: string;
        regexToInclude?: string;
    }>, {
        label: string;
        regexToInclude?: string;
    }, {
        label?: string;
        regexToInclude?: string;
    }>, "many">, z.ZodEffects<z.ZodObject<{
        regexToInclude: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        regexToInclude?: string;
    }, {
        label?: string;
        regexToInclude?: string;
    }>, {
        label: string;
        regexToInclude?: string;
    }, {
        label?: string;
        regexToInclude?: string;
    }>]>>, {
        label: string;
        regexToInclude?: string;
    }[], {
        label?: string;
        regexToInclude?: string;
    } | {
        label?: string;
        regexToInclude?: string;
    }[]>;
    exportedPropsName: z.ZodOptional<z.ZodString>;
    docsExport: z.ZodOptional<z.ZodString>;
    fullDocsExport: z.ZodOptional<z.ZodString>;
    componentId: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    tags?: string[];
    componentName?: string;
    componentId?: string;
    slot?: string;
    export?: string;
    embeddable?: {
        label: string;
        regexToInclude?: string;
    }[];
    exportedPropsName?: string;
    docsExport?: string;
    fullDocsExport?: string;
}, {
    tags?: string[];
    componentName?: string;
    componentId?: string;
    slot?: string;
    export?: string;
    embeddable?: {
        label?: string;
        regexToInclude?: string;
    } | {
        label?: string;
        regexToInclude?: string;
    }[];
    exportedPropsName?: string;
    docsExport?: string;
    fullDocsExport?: string;
}>;
export type EmbeddableConfigSchema = z.infer<typeof embeddableConfigSchema>;
export type BaseAppEmbeddableConfig = {
    package: string;
    slot: string;
    data: EmbeddableConfigSchema | EmbeddableConfigSchema[];
};
export type ComponentConfigSchema = z.input<typeof componentConfigSchema>;
