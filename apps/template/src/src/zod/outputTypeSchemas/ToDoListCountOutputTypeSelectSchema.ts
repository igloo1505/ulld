import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ToDoListCountOutputTypeSelectSchema: z.ZodType<Prisma.ToDoListCountOutputTypeSelect> = z.object({
  tasks: z.boolean().optional(),
  tags: z.boolean().optional(),
  topics: z.boolean().optional(),
  subjects: z.boolean().optional(),
}).strict();

export default ToDoListCountOutputTypeSelectSchema;
