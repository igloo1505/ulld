import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateNestedManyWithoutKanbanInputSchema } from './TagCreateNestedManyWithoutKanbanInputSchema';
import { SubjectCreateNestedManyWithoutKanbanInputSchema } from './SubjectCreateNestedManyWithoutKanbanInputSchema';
import { TopicCreateNestedManyWithoutKanbanInputSchema } from './TopicCreateNestedManyWithoutKanbanInputSchema';

export const KanbanCreateWithoutListsInputSchema: z.ZodType<Prisma.KanbanCreateWithoutListsInput> = z.object({
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();

export default KanbanCreateWithoutListsInputSchema;
