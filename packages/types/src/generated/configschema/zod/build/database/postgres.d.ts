import { z } from "zod";
import { ZodOutputSchema } from "../../../types.js";
export declare const postgresConfigSchema: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodObject<{
    port: z.ZodDefault<z.ZodNumber>;
    dbName: z.ZodDefault<z.ZodString>;
    connectionURI: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    port: number;
    dbName: string;
    connectionURI: string;
}, {
    port?: number | undefined;
    dbName?: string | undefined;
    connectionURI?: string | undefined;
}>>, {
    port: number;
    dbName: string;
    connectionURI: string;
}, {
    port?: number | undefined;
    dbName?: string | undefined;
    connectionURI?: string | undefined;
} | undefined>, {
    connectionURI: string;
    port?: undefined;
    dbName?: undefined;
} | {
    port: number;
    dbName: string;
    connectionURI?: undefined;
}, {
    port?: number | undefined;
    dbName?: string | undefined;
    connectionURI?: string | undefined;
} | undefined>;
export declare const postgresConfigSchemaOutput: ZodOutputSchema<typeof postgresConfigSchema>;
//# sourceMappingURL=postgres.d.ts.map