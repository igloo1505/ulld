import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateManyKanbanInputSchema } from './SubjectCreateManyKanbanInputSchema';

export const SubjectCreateManyKanbanInputEnvelopeSchema: z.ZodType<Prisma.SubjectCreateManyKanbanInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SubjectCreateManyKanbanInputSchema),z.lazy(() => SubjectCreateManyKanbanInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SubjectCreateManyKanbanInputEnvelopeSchema;
