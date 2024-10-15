import { z } from 'zod';
export declare const WhiteboardSchema: z.ZodObject<{
    id: z.ZodString;
    data: z.ZodType<Buffer, z.ZodTypeDef, Buffer>;
}, "strip", z.ZodTypeAny, {
    data: Buffer;
    id: string;
}, {
    data: Buffer;
    id: string;
}>;
export type Whiteboard = z.infer<typeof WhiteboardSchema>;
export declare const WhiteboardPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    data: z.ZodOptional<z.ZodType<Buffer, z.ZodTypeDef, Buffer>>;
}, "strip", z.ZodTypeAny, {
    data?: Buffer | undefined;
    id?: string | undefined;
}, {
    data?: Buffer | undefined;
    id?: string | undefined;
}>;
export type WhiteboardPartial = z.infer<typeof WhiteboardPartialSchema>;
export default WhiteboardSchema;
//# sourceMappingURL=WhiteboardSchema.d.ts.map