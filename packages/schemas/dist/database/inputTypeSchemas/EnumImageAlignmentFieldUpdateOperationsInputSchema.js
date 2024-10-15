import { z } from 'zod';
import { ImageAlignmentSchema } from './ImageAlignmentSchema.js';
export const EnumImageAlignmentFieldUpdateOperationsInputSchema = z.object({
    set: z.lazy(() => ImageAlignmentSchema).optional()
}).strict();
export default EnumImageAlignmentFieldUpdateOperationsInputSchema;
