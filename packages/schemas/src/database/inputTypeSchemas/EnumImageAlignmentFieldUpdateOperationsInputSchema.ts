import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageAlignmentSchema } from './ImageAlignmentSchema';

export const EnumImageAlignmentFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumImageAlignmentFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ImageAlignmentSchema).optional()
}).strict();

export default EnumImageAlignmentFieldUpdateOperationsInputSchema;
