import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListCreateNestedManyWithoutKanbanInputSchema } from './KanBanListCreateNestedManyWithoutKanbanInputSchema.js';
import { TagCreateNestedManyWithoutKanbanInputSchema } from './TagCreateNestedManyWithoutKanbanInputSchema.js';
import { SubjectCreateNestedManyWithoutKanbanInputSchema } from './SubjectCreateNestedManyWithoutKanbanInputSchema.js';
import { TopicCreateNestedManyWithoutKanbanInputSchema } from './TopicCreateNestedManyWithoutKanbanInputSchema.js';
export const KanbanCreateInputSchema: z.ZodType<Prisma.KanbanCreateInput> = z.object({
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lists: z.lazy(() => KanBanListCreateNestedManyWithoutKanbanInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
export default KanbanCreateInputSchema;