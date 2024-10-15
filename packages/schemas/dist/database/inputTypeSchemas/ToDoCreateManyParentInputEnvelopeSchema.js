import { z } from 'zod';
import { ToDoCreateManyParentInputSchema } from './ToDoCreateManyParentInputSchema.js';
export const ToDoCreateManyParentInputEnvelopeSchema = z.object({
    data: z.union([z.lazy(() => ToDoCreateManyParentInputSchema), z.lazy(() => ToDoCreateManyParentInputSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export default ToDoCreateManyParentInputEnvelopeSchema;
