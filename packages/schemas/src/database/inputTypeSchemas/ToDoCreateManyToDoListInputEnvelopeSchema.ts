import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoCreateManyToDoListInputSchema } from '../ToDoCreateManyToDoListInputSchema.js';
export const ToDoCreateManyToDoListInputEnvelopeSchema: z.ZodType<Prisma.ToDoCreateManyToDoListInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ToDoCreateManyToDoListInputSchema),z.lazy(() => ToDoCreateManyToDoListInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();
export default ToDoCreateManyToDoListInputEnvelopeSchema;