import { z } from "zod";
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
//# sourceMappingURL=postgres.d.ts.map