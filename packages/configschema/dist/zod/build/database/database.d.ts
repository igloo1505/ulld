import { z } from "zod";
import { ZodOutputSchema } from "../../../types.js";
export declare const ulldSupportedDatabases: readonly ["postgres", "sqlite"];
export declare const databaseBuildSchema: z.ZodEffects<z.ZodDefault<z.ZodObject<{
    type: z.ZodDefault<z.ZodEnum<["postgres", "sqlite"]>>;
    postgres: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodObject<{
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
    prioritize: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"speed">, z.ZodLiteral<"size">]>>;
}, "strip", z.ZodTypeAny, {
    type: "postgres" | "sqlite";
    postgres: {
        connectionURI: string;
        port?: undefined;
        dbName?: undefined;
    } | {
        port: number;
        dbName: string;
        connectionURI?: undefined;
    };
    prioritize: "size" | "speed";
}, {
    type?: "postgres" | "sqlite" | undefined;
    postgres?: {
        port?: number | undefined;
        dbName?: string | undefined;
        connectionURI?: string | undefined;
    } | undefined;
    prioritize?: "size" | "speed" | undefined;
}>>, {
    type: "postgres" | "sqlite";
    postgres: {
        connectionURI: string;
        port?: undefined;
        dbName?: undefined;
    } | {
        port: number;
        dbName: string;
        connectionURI?: undefined;
    };
    prioritize: "size" | "speed";
}, {
    type?: "postgres" | "sqlite" | undefined;
    postgres?: {
        port?: number | undefined;
        dbName?: string | undefined;
        connectionURI?: string | undefined;
    } | undefined;
    prioritize?: "size" | "speed" | undefined;
} | undefined>;
export declare const databaseBuildSchemaOutput: ZodOutputSchema<typeof databaseBuildSchema>;
//# sourceMappingURL=database.d.ts.map