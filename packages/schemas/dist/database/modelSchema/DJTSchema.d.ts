import { z } from 'zod';
export declare const DJTSchema: z.ZodObject<{
    id: z.ZodNumber;
    type: z.ZodString;
    data: z.ZodType<Buffer, z.ZodTypeDef, Buffer>;
}, "strip", z.ZodTypeAny, {
    data: Buffer;
    type: string;
    id: number;
}, {
    data: Buffer;
    type: string;
    id: number;
}>;
export type DJT = z.infer<typeof DJTSchema>;
export declare const DJTPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    type: z.ZodOptional<z.ZodString>;
    data: z.ZodOptional<z.ZodType<Buffer, z.ZodTypeDef, Buffer>>;
}, "strip", z.ZodTypeAny, {
    data?: Buffer | undefined;
    type?: string | undefined;
    id?: number | undefined;
}, {
    data?: Buffer | undefined;
    type?: string | undefined;
    id?: number | undefined;
}>;
export type DJTPartial = z.infer<typeof DJTPartialSchema>;
export default DJTSchema;
//# sourceMappingURL=DJTSchema.d.ts.map