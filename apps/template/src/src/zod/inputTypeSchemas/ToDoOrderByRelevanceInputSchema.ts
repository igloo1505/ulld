import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoOrderByRelevanceFieldEnumSchema } from './ToDoOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ToDoOrderByRelevanceInputSchema: z.ZodType<Prisma.ToDoOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ToDoOrderByRelevanceFieldEnumSchema),z.lazy(() => ToDoOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ToDoOrderByRelevanceInputSchema;
