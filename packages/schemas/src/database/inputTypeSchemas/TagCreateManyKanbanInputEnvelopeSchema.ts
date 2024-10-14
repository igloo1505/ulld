import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateManyKanbanInputSchema } from './TagCreateManyKanbanInputSchema';

export const TagCreateManyKanbanInputEnvelopeSchema: z.ZodType<Prisma.TagCreateManyKanbanInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagCreateManyKanbanInputSchema),z.lazy(() => TagCreateManyKanbanInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TagCreateManyKanbanInputEnvelopeSchema;
