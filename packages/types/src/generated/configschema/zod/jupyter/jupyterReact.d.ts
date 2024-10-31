import { z } from "zod";
import { ZodOutputSchema } from "../../types.js";
export declare const jupyterReactConfigSchema: z.ZodDefault<z.ZodObject<{
    collaborative: z.ZodDefault<z.ZodBoolean>;
    lite: z.ZodDefault<z.ZodBoolean>;
    serverUrls: z.ZodOptional<z.ZodObject<{
        baseUrl: z.ZodOptional<z.ZodString>;
        wsUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        baseUrl?: string;
        wsUrl?: string;
    }, {
        baseUrl?: string;
        wsUrl?: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    collaborative?: boolean;
    lite?: boolean;
    serverUrls?: {
        baseUrl?: string;
        wsUrl?: string;
    };
}, {
    collaborative?: boolean;
    lite?: boolean;
    serverUrls?: {
        baseUrl?: string;
        wsUrl?: string;
    };
}>>;
export declare const jupyterReactConfigSchemaOutput: ZodOutputSchema<typeof jupyterReactConfigSchema>;
