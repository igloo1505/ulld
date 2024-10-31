import { z } from 'zod';
import { ZodOutputSchema } from '../types.js';
declare const timeDisplayTypeSchema: z.ZodUnion<[z.ZodLiteral<"analog">, z.ZodLiteral<"summarized">, z.ZodLiteral<"descriptive">]>;
export type TimeDisplayType = z.input<typeof timeDisplayTypeSchema>;
export declare const dateParseConfigSchema: z.ZodDefault<z.ZodObject<{
    enableAdvancedFormat: z.ZodDefault<z.ZodBoolean>;
    format: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodObject<{
        short: z.ZodDefault<z.ZodString>;
        long: z.ZodDefault<z.ZodString>;
        withTime: z.ZodDefault<z.ZodString>;
        timeOnly: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        short: string;
        long: string;
        withTime: string;
        timeOnly: string;
    }, {
        short?: string | undefined;
        long?: string | undefined;
        withTime?: string | undefined;
        timeOnly?: string | undefined;
    }>]>>, {
        short: string;
        long: string;
        withTime: string;
        timeOnly: string;
    }, string | {
        short?: string | undefined;
        long?: string | undefined;
        withTime?: string | undefined;
        timeOnly?: string | undefined;
    } | undefined>;
    defaultTimeDisplayType: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"analog">, z.ZodLiteral<"summarized">, z.ZodLiteral<"descriptive">]>>;
    defaultTimeZone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    enableAdvancedFormat: boolean;
    format: {
        short: string;
        long: string;
        withTime: string;
        timeOnly: string;
    };
    defaultTimeDisplayType: "summarized" | "analog" | "descriptive";
    defaultTimeZone?: string | undefined;
}, {
    enableAdvancedFormat?: boolean | undefined;
    format?: string | {
        short?: string | undefined;
        long?: string | undefined;
        withTime?: string | undefined;
        timeOnly?: string | undefined;
    } | undefined;
    defaultTimeDisplayType?: "summarized" | "analog" | "descriptive" | undefined;
    defaultTimeZone?: string | undefined;
}>>;
export declare const dateParseConfigSchemaOutput: ZodOutputSchema<typeof dateParseConfigSchema>;
export {};
//# sourceMappingURL=dateParseConfig.d.ts.map