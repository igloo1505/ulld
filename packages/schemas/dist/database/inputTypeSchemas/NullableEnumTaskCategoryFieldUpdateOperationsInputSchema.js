import { z } from 'zod';
import { TaskCategorySchema } from './TaskCategorySchema.js';
export const NullableEnumTaskCategoryFieldUpdateOperationsInputSchema = z.object({
    set: z.lazy(() => TaskCategorySchema).optional().nullable()
}).strict();
export default NullableEnumTaskCategoryFieldUpdateOperationsInputSchema;
