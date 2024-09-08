import { z } from "zod";
export declare const zodOptStr: z.ZodNullable<z.ZodOptional<z.ZodString>>;
export declare const zodOptNum: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
export declare const zodOptBool: (defVal: boolean) => z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
export declare const zodCoerceToDate: (optional?: boolean, defaultReturn?: any) => z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>>>, any, string | number | Date | null | undefined> | z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, Date, string | number | Date>;
//# sourceMappingURL=utility.d.ts.map