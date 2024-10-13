import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListOrderByRelevanceFieldEnumSchema } from '../ToDoListOrderByRelevanceFieldEnumSchema.js';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const ToDoListOrderByRelevanceInputSchema: z.ZodType<Prisma.ToDoListOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ToDoListOrderByRelevanceFieldEnumSchema),z.lazy(() => ToDoListOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
export default ToDoListOrderByRelevanceInputSchema;