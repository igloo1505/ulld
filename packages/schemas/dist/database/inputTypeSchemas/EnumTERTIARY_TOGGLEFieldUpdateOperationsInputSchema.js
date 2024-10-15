import { z } from 'zod';
import { TERTIARY_TOGGLESchema } from './TERTIARY_TOGGLESchema.js';
export const EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema = z.object({
    set: z.lazy(() => TERTIARY_TOGGLESchema).optional()
}).strict();
export default EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema;
