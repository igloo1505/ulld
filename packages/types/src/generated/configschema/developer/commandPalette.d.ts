import { z } from "zod";
export declare const pluginCommandPaletteSchema: z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
    label: z.ZodString;
    isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
}, {
    action: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
}>, "strip", z.ZodTypeAny, {
    label: string;
    action: (...args: unknown[]) => unknown;
    isAvailable: (...args: unknown[]) => boolean;
}, {
    label: string;
    action: (...args: unknown[]) => unknown;
    isAvailable: (...args: unknown[]) => boolean;
}>, z.ZodObject<z.objectUtil.extendShape<{
    label: z.ZodString;
    isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
}, {
    href: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodString>]>;
}>, "strip", z.ZodTypeAny, {
    label: string;
    href: string | ((...args: unknown[]) => string);
    isAvailable: (...args: unknown[]) => boolean;
}, {
    label: string;
    href: string | ((...args: unknown[]) => string);
    isAvailable: (...args: unknown[]) => boolean;
}>]>, "many">;
//# sourceMappingURL=commandPalette.d.ts.map