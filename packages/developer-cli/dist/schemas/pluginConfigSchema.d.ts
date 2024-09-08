import { z } from "zod";
export declare const pluginConfigSchema: z.ZodObject<{
    paths: z.ZodObject<{
        routers: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
        pluginManager: z.ZodDefault<z.ZodString>;
        styles: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>>;
        app: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>>;
        public: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>>;
        globalStateComponents: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        public: string;
        routers: string[];
        pluginManager: string;
        app: string;
        styles?: string | undefined;
        globalStateComponents?: string | undefined;
    }, {
        routers?: string[] | undefined;
        pluginManager?: string | undefined;
        styles?: string | undefined;
        app?: string | undefined;
        public?: string | undefined;
        globalStateComponents?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    paths: {
        public: string;
        routers: string[];
        pluginManager: string;
        app: string;
        styles?: string | undefined;
        globalStateComponents?: string | undefined;
    };
}, {
    paths: {
        routers?: string[] | undefined;
        pluginManager?: string | undefined;
        styles?: string | undefined;
        app?: string | undefined;
        public?: string | undefined;
        globalStateComponents?: string | undefined;
    };
}>;
export type PluginConfig = z.output<typeof pluginConfigSchema>;
