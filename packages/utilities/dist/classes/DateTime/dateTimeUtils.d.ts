import { z } from 'zod';
declare const timeDisplayTypeSchema: z.ZodUnion<[z.ZodLiteral<"analog">, z.ZodLiteral<"summarized">, z.ZodLiteral<"descriptive">]>;
export type TimeDisplayType = z.input<typeof timeDisplayTypeSchema>;
export declare const dateParseConfigSchema: z.ZodDefault<z.ZodObject<{
    enableAdvancedFormat: z.ZodDefault<z.ZodBoolean>;
    format: z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodObject<{
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
    }>]>>;
    defaultTimeDisplayType: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"analog">, z.ZodLiteral<"summarized">, z.ZodLiteral<"descriptive">]>>;
    defaultTimeZone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    format: string | {
        short: string;
        long: string;
        withTime: string;
        timeOnly: string;
    };
    enableAdvancedFormat: boolean;
    defaultTimeDisplayType: "summarized" | "analog" | "descriptive";
    defaultTimeZone?: string | undefined;
}, {
    format?: string | {
        short?: string | undefined;
        long?: string | undefined;
        withTime?: string | undefined;
        timeOnly?: string | undefined;
    } | undefined;
    enableAdvancedFormat?: boolean | undefined;
    defaultTimeDisplayType?: "summarized" | "analog" | "descriptive" | undefined;
    defaultTimeZone?: string | undefined;
}>>;
export {};
//# sourceMappingURL=dateTimeUtils.d.ts.map