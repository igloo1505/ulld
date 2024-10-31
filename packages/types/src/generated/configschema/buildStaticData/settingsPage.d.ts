import { z } from "zod";
export declare const settingsPageOutputSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    href: z.ZodString;
    pluginName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    href?: string;
    pluginName?: string;
    title?: string;
    subtitle?: string;
}, {
    href?: string;
    pluginName?: string;
    title?: string;
    subtitle?: string;
}>;
