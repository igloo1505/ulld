import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagUncheckedCreateNestedManyWithoutKanbanInputSchema } from './TagUncheckedCreateNestedManyWithoutKanbanInputSchema';
import { SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema } from './SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema';
import { TopicUncheckedCreateNestedManyWithoutKanbanInputSchema } from './TopicUncheckedCreateNestedManyWithoutKanbanInputSchema';

export const KanbanUncheckedCreateWithoutListsInputSchema: z.ZodType<Prisma.KanbanUncheckedCreateWithoutListsInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();

export default KanbanUncheckedCreateWithoutListsInputSchema;
