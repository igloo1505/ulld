import { z } from 'zod';
export declare const DailyFocusSchema: z.ZodObject<{
    value: z.ZodString;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    value: string;
    createdAt: Date;
}, {
    value: string;
    createdAt: Date;
}>;
export type DailyFocus = z.infer<typeof DailyFocusSchema>;
export declare const DailyFocusPartialSchema: z.ZodObject<{
    value: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    value?: string | undefined;
    createdAt?: Date | undefined;
}, {
    value?: string | undefined;
    createdAt?: Date | undefined;
}>;
export type DailyFocusPartial = z.infer<typeof DailyFocusPartialSchema>;
export default DailyFocusSchema;
//# sourceMappingURL=DailyFocusSchema.d.ts.map