import { z } from "zod";
export declare enum ULLDSupportedDatabases {
    postgres = "Postgres",
    sqlite = "SQLite"
}
export declare const databaseBuildSchema: z.ZodEffects<z.ZodDefault<z.ZodObject<{
    type: z.ZodDefault<z.ZodNativeEnum<typeof ULLDSupportedDatabases>>;
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
    type: ULLDSupportedDatabases;
    postgres: {
        connectionURI: string;
        port?: undefined;
        dbName?: undefined;
    } | {
        port: number;
        dbName: string;
        connectionURI?: undefined;
    };
    prioritize: "speed" | "size";
}, {
    type?: ULLDSupportedDatabases | undefined;
    postgres?: {
        port?: number | undefined;
        dbName?: string | undefined;
        connectionURI?: string | undefined;
    } | undefined;
    prioritize?: "speed" | "size" | undefined;
}>>, {
    type: ULLDSupportedDatabases;
    postgres: {
        connectionURI: string;
        port?: undefined;
        dbName?: undefined;
    } | {
        port: number;
        dbName: string;
        connectionURI?: undefined;
    };
    prioritize: "speed" | "size";
}, {
    type?: ULLDSupportedDatabases | undefined;
    postgres?: {
        port?: number | undefined;
        dbName?: string | undefined;
        connectionURI?: string | undefined;
    } | undefined;
    prioritize?: "speed" | "size" | undefined;
} | undefined>;
//# sourceMappingURL=database.d.ts.map