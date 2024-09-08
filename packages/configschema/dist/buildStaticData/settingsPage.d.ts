import { z } from "zod";
export declare const settingsPageOutputSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    href: z.ZodString;
    pluginName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    href: string;
    pluginName: string;
    title?: string | undefined;
    subtitle?: string | undefined;
}, {
    href: string;
    pluginName: string;
    title?: string | undefined;
    subtitle?: string | undefined;
}>;
//# sourceMappingURL=settingsPage.d.ts.map