import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema } from './KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema';
import { TagUncheckedCreateNestedManyWithoutKanbanInputSchema } from './TagUncheckedCreateNestedManyWithoutKanbanInputSchema';
import { SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema } from './SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema';

export const KanbanUncheckedCreateWithoutTopicsInputSchema: z.ZodType<Prisma.KanbanUncheckedCreateWithoutTopicsInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lists: z.lazy(() => KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();

export default KanbanUncheckedCreateWithoutTopicsInputSchema;
