import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TaskCategorySchema } from './TaskCategorySchema';

export const NullableEnumTaskCategoryFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumTaskCategoryFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TaskCategorySchema).optional().nullable()
}).strict();

export default NullableEnumTaskCategoryFieldUpdateOperationsInputSchema;
