import { z } from "zod";
export declare const buildOnlySchema: z.ZodDefault<z.ZodObject<{
    database: z.ZodDefault<z.ZodEffects<z.ZodDefault<z.ZodObject<{
        type: z.ZodDefault<z.ZodNativeEnum<typeof import("./database/database").ULLDSupportedDatabases>>;
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
        type: import("./database/database").ULLDSupportedDatabases;
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
        type?: import("./database/database").ULLDSupportedDatabases | undefined;
        postgres?: {
            port?: number | undefined;
            dbName?: string | undefined;
            connectionURI?: string | undefined;
        } | undefined;
        prioritize?: "speed" | "size" | undefined;
    }>>, {
        type: import("./database/database").ULLDSupportedDatabases;
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
        type?: import("./database/database").ULLDSupportedDatabases | undefined;
        postgres?: {
            port?: number | undefined;
            dbName?: string | undefined;
            connectionURI?: string | undefined;
        } | undefined;
        prioritize?: "speed" | "size" | undefined;
    } | undefined>>;
    additionalUserContent: z.ZodDefault<z.ZodObject<{
        css: z.ZodOptional<z.ZodString>;
        favicon: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        logo: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        css?: string | undefined;
        favicon?: string | undefined;
        logo?: string | undefined;
    }, {
        css?: string | undefined;
        favicon?: string | undefined;
        logo?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    database: {
        type: import("./database/database").ULLDSupportedDatabases;
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
    };
    additionalUserContent: {
        css?: string | undefined;
        favicon?: string | undefined;
        logo?: string | undefined;
    };
}, {
    database?: {
        type?: import("./database/database").ULLDSupportedDatabases | undefined;
        postgres?: {
            port?: number | undefined;
            dbName?: string | undefined;
            connectionURI?: string | undefined;
        } | undefined;
        prioritize?: "speed" | "size" | undefined;
    } | undefined;
    additionalUserContent?: {
        css?: string | undefined;
        favicon?: string | undefined;
        logo?: string | undefined;
    } | undefined;
}>>;
//# sourceMappingURL=main.d.ts.map