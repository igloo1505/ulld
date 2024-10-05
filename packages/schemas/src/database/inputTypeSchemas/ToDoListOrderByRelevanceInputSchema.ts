import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListOrderByRelevanceFieldEnumSchema } from './ToDoListOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ToDoListOrderByRelevanceInputSchema: z.ZodType<Prisma.ToDoListOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ToDoListOrderByRelevanceFieldEnumSchema),z.lazy(() => ToDoListOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ToDoListOrderByRelevanceInputSchema;
