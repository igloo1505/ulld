import { z } from "zod";
import { ZodOutputSchema } from "../../types.js";
export declare const jupyterReactConfigSchema: z.ZodDefault<z.ZodObject<{
    collaborative: z.ZodDefault<z.ZodBoolean>;
    lite: z.ZodDefault<z.ZodBoolean>;
    serverUrls: z.ZodOptional<z.ZodObject<{
        baseUrl: z.ZodOptional<z.ZodString>;
        wsUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        baseUrl?: string | undefined;
        wsUrl?: string | undefined;
    }, {
        baseUrl?: string | undefined;
        wsUrl?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    collaborative: boolean;
    lite: boolean;
    serverUrls?: {
        baseUrl?: string | undefined;
        wsUrl?: string | undefined;
    } | undefined;
}, {
    collaborative?: boolean | undefined;
    lite?: boolean | undefined;
    serverUrls?: {
        baseUrl?: string | undefined;
        wsUrl?: string | undefined;
    } | undefined;
}>>;
export declare const jupyterReactConfigSchemaOutput: ZodOutputSchema<typeof jupyterReactConfigSchema>;
//# sourceMappingURL=jupyterReact.d.ts.map