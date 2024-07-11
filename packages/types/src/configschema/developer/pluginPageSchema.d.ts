import { z } from 'zod';
export declare const pluginAdditionalPageSchema: z.ZodObject<{
    targetUrl: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
    slot: z.ZodOptional<z.ZodString>;
    export: z.ZodEffects<z.ZodString, string, string>;
    exportsPageProps: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    export: string;
    exportsPageProps: boolean;
    targetUrl?: string | undefined;
    slot?: string | undefined;
}, {
    export: string;
    targetUrl?: string | undefined;
    slot?: string | undefined;
    exportsPageProps?: boolean | undefined;
}>;
//# sourceMappingURL=pluginPageSchema.d.ts.map