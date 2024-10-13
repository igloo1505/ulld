import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from '../IntWithAggregatesFilterSchema.js';
import { StringWithAggregatesFilterSchema } from '../StringWithAggregatesFilterSchema.js';
import { DateTimeWithAggregatesFilterSchema } from '../DateTimeWithAggregatesFilterSchema.js';
export const ToDoListScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ToDoListScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema),z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema),z.lazy(() => ToDoListScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  lastUpdate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();
export default ToDoListScalarWhereWithAggregatesInputSchema;