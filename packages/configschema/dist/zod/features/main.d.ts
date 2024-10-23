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
        calendar: boolean;
        bibliography: boolean;
        snippets: boolean;
        taskManager: boolean;
        equations: boolean;
    }, {
        calendar?: boolean | undefined;
        bibliography?: boolean | undefined;
        snippets?: boolean | undefined;
        taskManager?: boolean | undefined;
        equations?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    pages: {
        calendar: boolean;
        bibliography: boolean;
        snippets: boolean;
        taskManager: boolean;
        equations: boolean;
    };
    enabled: {
        commandPalette: boolean;
        tikz: boolean;
    };
}, {
    pages: {
        calendar?: boolean | undefined;
        bibliography?: boolean | undefined;
        snippets?: boolean | undefined;
        taskManager?: boolean | undefined;
        equations?: boolean | undefined;
    };
    enabled?: {
        commandPalette?: boolean | undefined;
        tikz?: boolean | undefined;
    } | undefined;
}>>;
//# sourceMappingURL=main.d.ts.map