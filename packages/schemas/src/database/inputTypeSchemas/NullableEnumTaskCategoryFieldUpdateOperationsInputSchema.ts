import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TaskCategorySchema } from './TaskCategorySchema.js';
export const NullableEnumTaskCategoryFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumTaskCategoryFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TaskCategorySchema).optional().nullable()
}).strict();
export default NullableEnumTaskCategoryFieldUpdateOperationsInputSchema;