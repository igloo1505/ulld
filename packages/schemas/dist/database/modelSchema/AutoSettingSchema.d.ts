import { z } from 'zod';
export declare const AutoSettingSchema: z.ZodObject<{
    type: z.ZodEnum<["tag", "topic", "subject"]>;
    id: z.ZodNumber;
    glob: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "tag" | "topic" | "subject";
    value: string;
    id: number;
    glob: string;
}, {
    type: "tag" | "topic" | "subject";
    value: string;
    id: number;
    glob: string;
}>;
export type AutoSetting = z.infer<typeof AutoSettingSchema>;
export declare const AutoSettingPartialSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<["tag", "topic", "subject"]>>;
    id: z.ZodOptional<z.ZodNumber>;
    glob: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type?: "tag" | "topic" | "subject" | undefined;
    value?: string | undefined;
    id?: number | undefined;
    glob?: string | undefined;
}, {
    type?: "tag" | "topic" | "subject" | undefined;
    value?: string | undefined;
    id?: number | undefined;
    glob?: string | undefined;
}>;
export type AutoSettingPartial = z.infer<typeof AutoSettingPartialSchema>;
export default AutoSettingSchema;
//# sourceMappingURL=AutoSettingSchema.d.ts.map