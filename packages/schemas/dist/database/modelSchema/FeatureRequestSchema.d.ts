import { z } from 'zod';
export declare const FeatureRequestSchema: z.ZodObject<{
    id: z.ZodNumber;
    email: z.ZodString;
    message: z.ZodString;
    category: z.ZodArray<z.ZodString, "many">;
    userBase: z.ZodArray<z.ZodString, "many">;
    receivedOn: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    message: string;
    id: number;
    email: string;
    category: string[];
    userBase: string[];
    receivedOn: Date;
}, {
    message: string;
    id: number;
    email: string;
    category: string[];
    userBase: string[];
    receivedOn: Date;
}>;
export type FeatureRequest = z.infer<typeof FeatureRequestSchema>;
export declare const FeatureRequestPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    email: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    userBase: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    receivedOn: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    message?: string | undefined;
    id?: number | undefined;
    email?: string | undefined;
    category?: string[] | undefined;
    userBase?: string[] | undefined;
    receivedOn?: Date | undefined;
}, {
    message?: string | undefined;
    id?: number | undefined;
    email?: string | undefined;
    category?: string[] | undefined;
    userBase?: string[] | undefined;
    receivedOn?: Date | undefined;
}>;
export type FeatureRequestPartial = z.infer<typeof FeatureRequestPartialSchema>;
export default FeatureRequestSchema;
//# sourceMappingURL=FeatureRequestSchema.d.ts.map