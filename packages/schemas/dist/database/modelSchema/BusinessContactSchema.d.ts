import { z } from 'zod';
export declare const BusinessContactSchema: z.ZodObject<{
    id: z.ZodNumber;
    companyName: z.ZodString;
    contactName: z.ZodString;
    contactPreference: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
    phone: z.ZodNullable<z.ZodString>;
    message: z.ZodString;
    purpose: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    phone: string | null;
    message: string;
    id: number;
    email: string | null;
    companyName: string;
    contactName: string;
    contactPreference: string;
    purpose: string | null;
}, {
    phone: string | null;
    message: string;
    id: number;
    email: string | null;
    companyName: string;
    contactName: string;
    contactPreference: string;
    purpose: string | null;
}>;
export type BusinessContact = z.infer<typeof BusinessContactSchema>;
export declare const BusinessContactPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    companyName: z.ZodOptional<z.ZodString>;
    contactName: z.ZodOptional<z.ZodString>;
    contactPreference: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    message: z.ZodOptional<z.ZodString>;
    purpose: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    phone?: string | null | undefined;
    message?: string | undefined;
    id?: number | undefined;
    email?: string | null | undefined;
    companyName?: string | undefined;
    contactName?: string | undefined;
    contactPreference?: string | undefined;
    purpose?: string | null | undefined;
}, {
    phone?: string | null | undefined;
    message?: string | undefined;
    id?: number | undefined;
    email?: string | null | undefined;
    companyName?: string | undefined;
    contactName?: string | undefined;
    contactPreference?: string | undefined;
    purpose?: string | null | undefined;
}>;
export type BusinessContactPartial = z.infer<typeof BusinessContactPartialSchema>;
export default BusinessContactSchema;
//# sourceMappingURL=BusinessContactSchema.d.ts.map