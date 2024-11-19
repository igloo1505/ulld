import { z } from "zod";
export declare const pluginCommandPaletteSchema: z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
    label: z.ZodString;
    isAvailable: z.ZodOptional<z.ZodString>;
}, {
    action: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
}>, "strip", z.ZodTypeAny, {
    label: string;
    action: (...args: unknown[]) => unknown;
    isAvailable?: string | undefined;
}, {
    label: string;
    action: (...args: unknown[]) => unknown;
    isAvailable?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    label: z.ZodString;
    isAvailable: z.ZodOptional<z.ZodString>;
}, {
    href: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodString>]>;
}>, "strip", z.ZodTypeAny, {
    label: string;
    href: string | ((...args: unknown[]) => string);
    isAvailable?: string | undefined;
}, {
    label: string;
    href: string | ((...args: unknown[]) => string);
    isAvailable?: string | undefined;
}>]>, "many">;
//# sourceMappingURL=commandPalette.d.ts.map