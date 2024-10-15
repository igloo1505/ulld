import { z } from 'zod';
export declare const WaitlistRequestSchema: z.ZodObject<{
    id: z.ZodNumber;
    email: z.ZodString;
    receivedOn: z.ZodDate;
    emailsSent: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    email: string;
    receivedOn: Date;
    emailsSent: number;
}, {
    id: number;
    email: string;
    receivedOn: Date;
    emailsSent: number;
}>;
export type WaitlistRequest = z.infer<typeof WaitlistRequestSchema>;
export declare const WaitlistRequestPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    email: z.ZodOptional<z.ZodString>;
    receivedOn: z.ZodOptional<z.ZodDate>;
    emailsSent: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    email?: string | undefined;
    receivedOn?: Date | undefined;
    emailsSent?: number | undefined;
}, {
    id?: number | undefined;
    email?: string | undefined;
    receivedOn?: Date | undefined;
    emailsSent?: number | undefined;
}>;
export type WaitlistRequestPartial = z.infer<typeof WaitlistRequestPartialSchema>;
export default WaitlistRequestSchema;
//# sourceMappingURL=WaitlistRequestSchema.d.ts.map