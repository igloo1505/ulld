import { z } from "zod";
import { ZodOutputSchema } from "../../types.js";
export declare const nbConvertTemplateOptions: z.ZodUnion<[z.ZodLiteral<"lab">, z.ZodLiteral<"classic">, z.ZodLiteral<"reveal">, z.ZodString]>;
export declare const nbConvertConfigSchema: z.ZodObject<{
    nbconvertPath: z.ZodOptional<z.ZodString>;
    conversionTimeout: z.ZodDefault<z.ZodNumber>;
    customConversionFunction: z.ZodOptional<z.ZodObject<{
        pdf: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodString], z.ZodUnknown>, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
    }, {
        pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
    }>>;
    execute: z.ZodDefault<z.ZodBoolean>;
    nbConvertTemplate: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"lab">, z.ZodLiteral<"classic">, z.ZodLiteral<"reveal">, z.ZodString]>>;
    notebookOutputDir: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    conversionTimeout: number;
    execute: boolean;
    nbConvertTemplate: string;
    notebookOutputDir: string;
    nbconvertPath?: string | undefined;
    customConversionFunction?: {
        pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
    } | undefined;
}, {
    nbconvertPath?: string | undefined;
    conversionTimeout?: number | undefined;
    customConversionFunction?: {
        pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
    } | undefined;
    execute?: boolean | undefined;
    nbConvertTemplate?: string | undefined;
    notebookOutputDir?: string | undefined;
}>;
export declare const nbConvertConfigSchemaOutput: ZodOutputSchema<typeof nbConvertConfigSchema>;
//# sourceMappingURL=nbconvert.d.ts.map