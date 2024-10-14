import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagCreateManyKanbanInputSchema } from './TagCreateManyKanbanInputSchema.js';
export const TagCreateManyKanbanInputEnvelopeSchema: z.ZodType<Prisma.TagCreateManyKanbanInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagCreateManyKanbanInputSchema),z.lazy(() => TagCreateManyKanbanInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();
export default TagCreateManyKanbanInputEnvelopeSchema;