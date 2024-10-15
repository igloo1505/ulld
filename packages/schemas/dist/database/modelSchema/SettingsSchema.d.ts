import { z } from 'zod';
export declare const SettingsSchema: z.ZodObject<{
    landingImageAlign: z.ZodEnum<["bottom", "center", "top", "left", "right"]>;
    id: z.ZodNumber;
    tooltips: z.ZodBoolean;
    title: z.ZodString;
    summary_showCitations: z.ZodBoolean;
    summary_showTags: z.ZodBoolean;
    lockedLandingImage: z.ZodNullable<z.ZodString>;
    cleanOnSync: z.ZodBoolean;
    plotTheme: z.ZodNullable<z.ZodString>;
    /**
     * [PluginSettingsRecord]
     */
    pluginSettings: z.ZodType<import(".prisma/client").Prisma.JsonValue, z.ZodTypeDef, import(".prisma/client").Prisma.JsonValue>;
    firstSync: z.ZodDate;
    lastSync: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    firstSync: Date;
    id: number;
    title: string;
    lastSync: Date;
    landingImageAlign: "right" | "left" | "bottom" | "center" | "top";
    tooltips: boolean;
    summary_showCitations: boolean;
    summary_showTags: boolean;
    lockedLandingImage: string | null;
    cleanOnSync: boolean;
    plotTheme: string | null;
    pluginSettings: import(".prisma/client").Prisma.JsonValue;
}, {
    firstSync: Date;
    id: number;
    title: string;
    lastSync: Date;
    landingImageAlign: "right" | "left" | "bottom" | "center" | "top";
    tooltips: boolean;
    summary_showCitations: boolean;
    summary_showTags: boolean;
    lockedLandingImage: string | null;
    cleanOnSync: boolean;
    plotTheme: string | null;
    pluginSettings: import(".prisma/client").Prisma.JsonValue;
}>;
export type Settings = z.infer<typeof SettingsSchema>;
export declare const SettingsPartialSchema: z.ZodObject<{
    landingImageAlign: z.ZodOptional<z.ZodEnum<["bottom", "center", "top", "left", "right"]>>;
    id: z.ZodOptional<z.ZodNumber>;
    tooltips: z.ZodOptional<z.ZodBoolean>;
    title: z.ZodOptional<z.ZodString>;
    summary_showCitations: z.ZodOptional<z.ZodBoolean>;
    summary_showTags: z.ZodOptional<z.ZodBoolean>;
    lockedLandingImage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cleanOnSync: z.ZodOptional<z.ZodBoolean>;
    plotTheme: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    pluginSettings: z.ZodOptional<z.ZodType<import(".prisma/client").Prisma.JsonValue, z.ZodTypeDef, import(".prisma/client").Prisma.JsonValue>>;
    firstSync: z.ZodOptional<z.ZodDate>;
    lastSync: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    firstSync?: Date | undefined;
    id?: number | undefined;
    title?: string | undefined;
    lastSync?: Date | undefined;
    landingImageAlign?: "right" | "left" | "bottom" | "center" | "top" | undefined;
    tooltips?: boolean | undefined;
    summary_showCitations?: boolean | undefined;
    summary_showTags?: boolean | undefined;
    lockedLandingImage?: string | null | undefined;
    cleanOnSync?: boolean | undefined;
    plotTheme?: string | null | undefined;
    pluginSettings?: import(".prisma/client").Prisma.JsonValue | undefined;
}, {
    firstSync?: Date | undefined;
    id?: number | undefined;
    title?: string | undefined;
    lastSync?: Date | undefined;
    landingImageAlign?: "right" | "left" | "bottom" | "center" | "top" | undefined;
    tooltips?: boolean | undefined;
    summary_showCitations?: boolean | undefined;
    summary_showTags?: boolean | undefined;
    lockedLandingImage?: string | null | undefined;
    cleanOnSync?: boolean | undefined;
    plotTheme?: string | null | undefined;
    pluginSettings?: import(".prisma/client").Prisma.JsonValue | undefined;
}>;
export type SettingsPartial = z.infer<typeof SettingsPartialSchema>;
export default SettingsSchema;
//# sourceMappingURL=SettingsSchema.d.ts.map