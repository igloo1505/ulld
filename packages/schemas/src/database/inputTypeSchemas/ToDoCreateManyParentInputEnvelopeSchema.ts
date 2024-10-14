import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateManyParentInputSchema } from './ToDoCreateManyParentInputSchema';

export const ToDoCreateManyParentInputEnvelopeSchema: z.ZodType<Prisma.ToDoCreateManyParentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ToDoCreateManyParentInputSchema),z.lazy(() => ToDoCreateManyParentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ToDoCreateManyParentInputEnvelopeSchema;
