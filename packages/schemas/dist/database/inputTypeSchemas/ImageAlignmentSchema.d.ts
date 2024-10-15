import { z } from 'zod';
export declare const ImageAlignmentSchema: z.ZodEnum<["bottom", "center", "top", "left", "right"]>;
export type ImageAlignmentType = `${z.infer<typeof ImageAlignmentSchema>}`;
export default ImageAlignmentSchema;
//# sourceMappingURL=ImageAlignmentSchema.d.ts.map