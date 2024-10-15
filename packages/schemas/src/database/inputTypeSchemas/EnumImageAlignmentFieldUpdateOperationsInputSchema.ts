import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ImageAlignmentSchema } from './ImageAlignmentSchema.js';
export const EnumImageAlignmentFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumImageAlignmentFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ImageAlignmentSchema).optional()
}).strict();
export default EnumImageAlignmentFieldUpdateOperationsInputSchema;