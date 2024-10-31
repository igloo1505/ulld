import { z } from 'zod';
export declare const pluginAdditionalPageSchema: z.ZodObject<{
    targetUrl: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
    slot: z.ZodOptional<z.ZodString>;
    export: z.ZodEffects<z.ZodString, string, string>;
    exportsPageProps: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    slot?: string;
    export?: string;
    targetUrl?: string;
    exportsPageProps?: boolean;
}, {
    slot?: string;
    export?: string;
    targetUrl?: string;
    exportsPageProps?: boolean;
}>;
