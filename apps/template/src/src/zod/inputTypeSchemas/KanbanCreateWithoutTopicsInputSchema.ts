import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListCreateNestedManyWithoutKanbanInputSchema } from './KanBanListCreateNestedManyWithoutKanbanInputSchema';
import { TagCreateNestedManyWithoutKanbanInputSchema } from './TagCreateNestedManyWithoutKanbanInputSchema';
import { SubjectCreateNestedManyWithoutKanbanInputSchema } from './SubjectCreateNestedManyWithoutKanbanInputSchema';

export const KanbanCreateWithoutTopicsInputSchema: z.ZodType<Prisma.KanbanCreateWithoutTopicsInput> = z.object({
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lists: z.lazy(() => KanBanListCreateNestedManyWithoutKanbanInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();

export default KanbanCreateWithoutTopicsInputSchema;
