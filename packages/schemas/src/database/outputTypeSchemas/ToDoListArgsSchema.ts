import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ToDoListSelectSchema } from '../inputTypeSchemas/ToDoListSelectSchema.js';
import { ToDoListIncludeSchema } from '../inputTypeSchemas/ToDoListIncludeSchema.js';
export const ToDoListArgsSchema: z.ZodType<Prisma.ToDoListDefaultArgs> = z.object({
  select: z.lazy(() => ToDoListSelectSchema).optional(),
  include: z.lazy(() => ToDoListIncludeSchema).optional(),
}).strict();
export default ToDoListArgsSchema;