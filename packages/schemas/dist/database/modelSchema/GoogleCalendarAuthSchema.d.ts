import { z } from 'zod';
export declare const GoogleCalendarAuthSchema: z.ZodObject<{
    id: z.ZodNumber;
    auth: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: number;
    auth: string | null;
}, {
    id: number;
    auth: string | null;
}>;
export type GoogleCalendarAuth = z.infer<typeof GoogleCalendarAuthSchema>;
export declare const GoogleCalendarAuthPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    auth: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    auth?: string | null | undefined;
}, {
    id?: number | undefined;
    auth?: string | null | undefined;
}>;
export type GoogleCalendarAuthPartial = z.infer<typeof GoogleCalendarAuthPartialSchema>;
export default GoogleCalendarAuthSchema;
//# sourceMappingURL=GoogleCalendarAuthSchema.d.ts.map