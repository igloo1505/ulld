import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoListSelectSchema } from '../inputTypeSchemas/ToDoListSelectSchema';
import { ToDoListIncludeSchema } from '../inputTypeSchemas/ToDoListIncludeSchema';

export const ToDoListArgsSchema: z.ZodType<Prisma.ToDoListDefaultArgs> = z.object({
  select: z.lazy(() => ToDoListSelectSchema).optional(),
  include: z.lazy(() => ToDoListIncludeSchema).optional(),
}).strict();

export default ToDoListArgsSchema;
