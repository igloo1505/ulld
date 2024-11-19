import { z } from "zod";
export declare const ulldCliConfigSchema: z.ZodObject<{
    build: z.ZodDefault<z.ZodObject<{
        buildDir: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        buildDir?: string | undefined;
    }, {
        buildDir?: string | undefined;
    }>>;
    logLevel: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"info">, z.ZodLiteral<"warn">, z.ZodLiteral<"error">, z.ZodLiteral<"debug">]>>;
    logFile: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    build: {
        buildDir?: string | undefined;
    };
    logLevel?: "info" | "warn" | "debug" | "error" | undefined;
    logFile?: string | undefined;
}, {
    build?: {
        buildDir?: string | undefined;
    } | undefined;
    logLevel?: "info" | "warn" | "debug" | "error" | undefined;
    logFile?: string | undefined;
}>;
//# sourceMappingURL=main.d.ts.map