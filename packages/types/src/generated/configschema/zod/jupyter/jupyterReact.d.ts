import { z } from "zod";
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
export declare const jupyterReactConfigSchemaOutput: z.ZodObject<z.objectUtil.extendShape<{
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
}, {
    serverUrls: z.ZodObject<{
        baseUrl: z.ZodString;
        wsUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        baseUrl: string;
        wsUrl: string;
    }, {
        baseUrl: string;
        wsUrl: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    collaborative: boolean;
    lite: boolean;
    serverUrls: {
        baseUrl: string;
        wsUrl: string;
    };
}, {
    serverUrls: {
        baseUrl: string;
        wsUrl: string;
    };
    collaborative?: boolean | undefined;
    lite?: boolean | undefined;
}>;
//# sourceMappingURL=jupyterReact.d.ts.map