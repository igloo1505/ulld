import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema } from './KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema';
import { TagUncheckedCreateNestedManyWithoutKanbanInputSchema } from './TagUncheckedCreateNestedManyWithoutKanbanInputSchema';
import { SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema } from './SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema';
import { TopicUncheckedCreateNestedManyWithoutKanbanInputSchema } from './TopicUncheckedCreateNestedManyWithoutKanbanInputSchema';

export const KanbanUncheckedCreateInputSchema: z.ZodType<Prisma.KanbanUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lists: z.lazy(() => KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();

export default KanbanUncheckedCreateInputSchema;
