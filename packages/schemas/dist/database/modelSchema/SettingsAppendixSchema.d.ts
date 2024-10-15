import { z } from 'zod';
export declare const SettingsAppendixSchema: z.ZodObject<{
    id: z.ZodString;
    data: z.ZodType<Buffer, z.ZodTypeDef, Buffer>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    data: Buffer;
    id: string;
    createdAt: Date;
    updatedAt: Date;
}, {
    data: Buffer;
    id: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export type SettingsAppendix = z.infer<typeof SettingsAppendixSchema>;
export declare const SettingsAppendixPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    data: z.ZodOptional<z.ZodType<Buffer, z.ZodTypeDef, Buffer>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    data?: Buffer | undefined;
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}, {
    data?: Buffer | undefined;
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
export type SettingsAppendixPartial = z.infer<typeof SettingsAppendixPartialSchema>;
export default SettingsAppendixSchema;
//# sourceMappingURL=SettingsAppendixSchema.d.ts.map