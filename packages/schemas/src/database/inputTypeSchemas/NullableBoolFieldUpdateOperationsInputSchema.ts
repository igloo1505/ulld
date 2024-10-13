import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable()
}).strict();
export default NullableBoolFieldUpdateOperationsInputSchema;