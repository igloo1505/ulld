import { z } from "zod";
export declare const pluginCommandPaletteSchema: z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
    label: z.ZodString;
    isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
}, {
    action: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
}>, "strip", z.ZodTypeAny, {
    label: string;
    isAvailable: (...args: unknown[]) => boolean;
    action: (...args: unknown[]) => unknown;
}, {
    label: string;
    isAvailable: (...args: unknown[]) => boolean;
    action: (...args: unknown[]) => unknown;
}>, z.ZodObject<z.objectUtil.extendShape<{
    label: z.ZodString;
    isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
}, {
    href: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodString>]>;
}>, "strip", z.ZodTypeAny, {
    href: string | ((...args: unknown[]) => string);
    label: string;
    isAvailable: (...args: unknown[]) => boolean;
}, {
    href: string | ((...args: unknown[]) => string);
    label: string;
    isAvailable: (...args: unknown[]) => boolean;
}>]>, "many">;
//# sourceMappingURL=commandPalette.d.ts.map