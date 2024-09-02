import { z } from 'zod';
export declare const plotConfigSchema: z.ZodDefault<z.ZodObject<{
    plotColorList: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodObject<{
        dark: z.ZodArray<z.ZodString, "many">;
        light: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        dark: string[];
        light: string[];
    }, {
        dark: string[];
        light: string[];
    }>]>>;
    plotColorCycleMethod: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"inOrder">, z.ZodLiteral<"random">]>>;
}, "strip", z.ZodTypeAny, {
    plotColorList: (string[] | {
        dark: string[];
        light: string[];
    }) & (string[] | {
        dark: string[];
        light: string[];
    } | undefined);
    plotColorCycleMethod: "inOrder" | "random";
}, {
    plotColorList?: string[] | {
        dark: string[];
        light: string[];
    } | undefined;
    plotColorCycleMethod?: "inOrder" | "random" | undefined;
}>>;
//# sourceMappingURL=main.d.ts.map