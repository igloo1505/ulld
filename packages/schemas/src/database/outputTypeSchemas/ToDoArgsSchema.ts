import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoSelectSchema } from '../inputTypeSchemas/ToDoSelectSchema';
import { ToDoIncludeSchema } from '../inputTypeSchemas/ToDoIncludeSchema';

export const ToDoArgsSchema: z.ZodType<Prisma.ToDoDefaultArgs> = z.object({
  select: z.lazy(() => ToDoSelectSchema).optional(),
  include: z.lazy(() => ToDoIncludeSchema).optional(),
}).strict();

export default ToDoArgsSchema;
