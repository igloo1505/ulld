import { z } from "zod";
export declare const pluginCommandPaletteSchema: z.ZodObject<{
    pluginLabel: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    items: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
        action: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    }, {
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    }>, z.ZodObject<{
        label: z.ZodString;
        isAvailable: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodBoolean>;
        href: z.ZodUnion<[z.ZodString, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodString>]>;
    }, "strip", z.ZodTypeAny, {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    }, {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    pluginLabel: string;
    items: ({
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    } | {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    })[];
}, {
    items: ({
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
        action: (...args: unknown[]) => unknown;
    } | {
        href: (string | ((...args: unknown[]) => string)) & (string | ((...args: unknown[]) => string) | undefined);
        label: string;
        isAvailable: (...args: unknown[]) => boolean;
    })[];
    pluginLabel?: string | undefined;
}>;
//# sourceMappingURL=commandPalette.d.ts.map