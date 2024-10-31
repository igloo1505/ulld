import { z } from "zod";
export declare const mediaConfigSchema: z.ZodDefault<z.ZodObject<{
    imageMap: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>>>;
    includeDefaultImageMap: z.ZodDefault<z.ZodBoolean>;
    imageRemoteTest: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodType<RegExp, z.ZodTypeDef, RegExp>, z.ZodString]>, "many">>, string[], (string | RegExp)[]>;
}, "strip", z.ZodTypeAny, {
    imageMap?: Record<string, string>;
    includeDefaultImageMap?: boolean;
    imageRemoteTest?: string[];
}, {
    imageMap?: Record<string, string>;
    includeDefaultImageMap?: boolean;
    imageRemoteTest?: (string | RegExp)[];
}>>;
export declare const mediaConfigSchemaOutput: z.ZodObject<{
    imageMap: z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>>;
    includeDefaultImageMap: z.ZodBoolean;
    imageRemoteTest: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    imageMap?: Record<string, string>;
    includeDefaultImageMap?: boolean;
    imageRemoteTest?: string[];
}, {
    imageMap?: Record<string, string>;
    includeDefaultImageMap?: boolean;
    imageRemoteTest?: string[];
}>;
