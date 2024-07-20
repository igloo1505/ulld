import { z } from "zod";
export declare const embeddableConfigSchema: z.ZodEffects<z.ZodObject<{
    regexToInclude: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    regexToInclude: string;
    label?: string | undefined;
}, {
    regexToInclude: string;
    label?: string | undefined;
}>, {
    label: string;
    regexToInclude: string;
}, {
    regexToInclude: string;
    label?: string | undefined;
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
        regexToInclude: string;
        label?: string | undefined;
    }, {
        regexToInclude: string;
        label?: string | undefined;
    }>, {
        label: string;
        regexToInclude: string;
    }, {
        regexToInclude: string;
        label?: string | undefined;
    }>, "many">, z.ZodEffects<z.ZodObject<{
        regexToInclude: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        regexToInclude: string;
        label?: string | undefined;
    }, {
        regexToInclude: string;
        label?: string | undefined;
    }>, {
        label: string;
        regexToInclude: string;
    }, {
        regexToInclude: string;
        label?: string | undefined;
    }>]>>, {
        label: string;
        regexToInclude: string;
    }[] | undefined, {
        regexToInclude: string;
        label?: string | undefined;
    } | {
        regexToInclude: string;
        label?: string | undefined;
    }[] | undefined>;
    docsExport: z.ZodOptional<z.ZodString>;
    fullDocsExport: z.ZodOptional<z.ZodString>;
    componentId: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    tags: string[];
    componentName: string;
    componentId: string;
    export: string;
    slot?: string | undefined;
    embeddable?: {
        label: string;
        regexToInclude: string;
    }[] | undefined;
    docsExport?: string | undefined;
    fullDocsExport?: string | undefined;
}, {
    componentName: string;
    export: string;
    tags?: string[] | undefined;
    slot?: string | undefined;
    embeddable?: {
        regexToInclude: string;
        label?: string | undefined;
    } | {
        regexToInclude: string;
        label?: string | undefined;
    }[] | undefined;
    docsExport?: string | undefined;
    fullDocsExport?: string | undefined;
    componentId?: string | undefined;
}>;
export type EmbeddableConfigSchema = z.infer<typeof embeddableConfigSchema>;
export type BaseAppEmbeddableConfig = {
    package: string;
    slot: string;
    data: EmbeddableConfigSchema | EmbeddableConfigSchema[];
};
export type ComponentConfigSchema = z.input<typeof componentConfigSchema>;
//# sourceMappingURL=componentSchema.d.ts.map