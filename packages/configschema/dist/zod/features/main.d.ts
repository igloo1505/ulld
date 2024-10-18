import { z } from "zod";
export declare const featuresConfigSchema: z.ZodOptional<z.ZodObject<{
    enabled: z.ZodDefault<z.ZodObject<{
        commandPalette: z.ZodDefault<z.ZodBoolean>;
        tikz: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        commandPalette: boolean;
        tikz: boolean;
    }, {
        commandPalette?: boolean | undefined;
        tikz?: boolean | undefined;
    }>>;
    pages: z.ZodObject<{
        equations: z.ZodDefault<z.ZodBoolean>;
        snippets: z.ZodDefault<z.ZodBoolean>;
        calendar: z.ZodDefault<z.ZodBoolean>;
        bibliography: z.ZodDefault<z.ZodBoolean>;
        taskManager: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        snippets: boolean;
        calendar: boolean;
        bibliography: boolean;
        taskManager: boolean;
        equations: boolean;
    }, {
        snippets?: boolean | undefined;
        calendar?: boolean | undefined;
        bibliography?: boolean | undefined;
        taskManager?: boolean | undefined;
        equations?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    pages: {
        snippets: boolean;
        calendar: boolean;
        bibliography: boolean;
        taskManager: boolean;
        equations: boolean;
    };
    enabled: {
        commandPalette: boolean;
        tikz: boolean;
    };
}, {
    pages: {
        snippets?: boolean | undefined;
        calendar?: boolean | undefined;
        bibliography?: boolean | undefined;
        taskManager?: boolean | undefined;
        equations?: boolean | undefined;
    };
    enabled?: {
        commandPalette?: boolean | undefined;
        tikz?: boolean | undefined;
    } | undefined;
}>>;
//# sourceMappingURL=main.d.ts.map