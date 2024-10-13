import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListCreateNestedManyWithoutKanbanInputSchema } from '../KanBanListCreateNestedManyWithoutKanbanInputSchema.js';
import { TagCreateNestedManyWithoutKanbanInputSchema } from '../TagCreateNestedManyWithoutKanbanInputSchema.js';
import { SubjectCreateNestedManyWithoutKanbanInputSchema } from '../SubjectCreateNestedManyWithoutKanbanInputSchema.js';
export const KanbanCreateWithoutTopicsInputSchema: z.ZodType<Prisma.KanbanCreateWithoutTopicsInput> = z.object({
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lists: z.lazy(() => KanBanListCreateNestedManyWithoutKanbanInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
export default KanbanCreateWithoutTopicsInputSchema;