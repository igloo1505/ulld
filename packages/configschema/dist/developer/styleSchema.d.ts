import { z } from "zod";
export declare const styleExtensionSchema: z.ZodObject<{
    tailwindExport: z.ZodString;
    DANGER_disableBaselineTailwind: z.ZodDefault<z.ZodBoolean>;
    DANGER_disableDefaultMDXStyles: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    tailwindExport: string;
    DANGER_disableBaselineTailwind: boolean;
    DANGER_disableDefaultMDXStyles: boolean;
}, {
    tailwindExport: string;
    DANGER_disableBaselineTailwind?: boolean | undefined;
    DANGER_disableDefaultMDXStyles?: boolean | undefined;
}>;
//# sourceMappingURL=styleSchema.d.ts.map