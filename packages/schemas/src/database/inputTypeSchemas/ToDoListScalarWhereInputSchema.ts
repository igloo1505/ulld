import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema.js';
import { StringFilterSchema } from './StringFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
export const ToDoListScalarWhereInputSchema: z.ZodType<Prisma.ToDoListScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ToDoListScalarWhereInputSchema),z.lazy(() => ToDoListScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ToDoListScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ToDoListScalarWhereInputSchema),z.lazy(() => ToDoListScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastUpdate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();
export default ToDoListScalarWhereInputSchema;