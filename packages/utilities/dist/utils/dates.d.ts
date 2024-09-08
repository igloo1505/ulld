import { z } from 'zod';
export declare const dateZodProperty: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, Date, string | Date>;
export declare const dateNullableZodProperty: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, string | Date | null | undefined, string | Date | null | undefined>;
//# sourceMappingURL=dates.d.ts.map