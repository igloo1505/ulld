import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const BytesFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BytesFieldUpdateOperationsInput> = z.object({
  set: z.instanceof(Buffer).optional()
}).strict();
export default BytesFieldUpdateOperationsInputSchema;