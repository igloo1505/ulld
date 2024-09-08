import { z } from "zod";
export declare const mediaConfigSchema: z.ZodDefault<z.ZodObject<{
    imageMap: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>>>;
    includeDefaultImageMap: z.ZodDefault<z.ZodBoolean>;
    imageRemoteTest: z.ZodDefault<z.ZodArray<z.ZodType<RegExp, z.ZodTypeDef, RegExp>, "many">>;
}, "strip", z.ZodTypeAny, {
    imageMap: Record<string, string | undefined>;
    includeDefaultImageMap: boolean;
    imageRemoteTest: RegExp[];
}, {
    imageMap?: Record<string, string | undefined> | undefined;
    includeDefaultImageMap?: boolean | undefined;
    imageRemoteTest?: RegExp[] | undefined;
}>>;
//# sourceMappingURL=mediaConfig.d.ts.map