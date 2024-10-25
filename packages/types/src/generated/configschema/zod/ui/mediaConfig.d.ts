import { z } from "zod";
import { ZodOutputSchema } from "../../types.js";
export declare const mediaConfigSchema: z.ZodDefault<z.ZodObject<{
    imageMap: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>>>;
    includeDefaultImageMap: z.ZodDefault<z.ZodBoolean>;
    imageRemoteTest: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodType<RegExp, z.ZodTypeDef, RegExp>, z.ZodString]>, "many">>, string[], (string | RegExp)[] | undefined>;
}, "strip", z.ZodTypeAny, {
    imageMap: Record<string, string | undefined>;
    includeDefaultImageMap: boolean;
    imageRemoteTest: string[];
}, {
    imageMap?: Record<string, string | undefined> | undefined;
    includeDefaultImageMap?: boolean | undefined;
    imageRemoteTest?: (string | RegExp)[] | undefined;
}>>;
export declare const mediaConfigSchemaOutput: ZodOutputSchema<typeof mediaConfigSchema>;
//# sourceMappingURL=mediaConfig.d.ts.map