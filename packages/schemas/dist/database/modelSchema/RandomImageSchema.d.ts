import { z } from 'zod';
export declare const RandomImageSchema: z.ZodObject<{
    path: z.ZodString;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    path: string;
    createdAt: Date;
}, {
    path: string;
    createdAt: Date;
}>;
export type RandomImage = z.infer<typeof RandomImageSchema>;
export declare const RandomImagePartialSchema: z.ZodObject<{
    path: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    path?: string | undefined;
    createdAt?: Date | undefined;
}, {
    path?: string | undefined;
    createdAt?: Date | undefined;
}>;
export type RandomImagePartial = z.infer<typeof RandomImagePartialSchema>;
export default RandomImageSchema;
//# sourceMappingURL=RandomImageSchema.d.ts.map