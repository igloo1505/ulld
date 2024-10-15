import { z } from 'zod';
export declare const TERTIARY_TOGGLESchema: z.ZodEnum<["on", "off", "partial"]>;
export type TERTIARY_TOGGLEType = `${z.infer<typeof TERTIARY_TOGGLESchema>}`;
export default TERTIARY_TOGGLESchema;
//# sourceMappingURL=TERTIARY_TOGGLESchema.d.ts.map