import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListCreateNestedManyWithoutKanbanInputSchema } from './KanBanListCreateNestedManyWithoutKanbanInputSchema';
import { TagCreateNestedManyWithoutKanbanInputSchema } from './TagCreateNestedManyWithoutKanbanInputSchema';
import { SubjectCreateNestedManyWithoutKanbanInputSchema } from './SubjectCreateNestedManyWithoutKanbanInputSchema';
import { TopicCreateNestedManyWithoutKanbanInputSchema } from './TopicCreateNestedManyWithoutKanbanInputSchema';

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
