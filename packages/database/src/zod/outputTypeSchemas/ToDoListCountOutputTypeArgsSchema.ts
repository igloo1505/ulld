import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoListCountOutputTypeSelectSchema } from './ToDoListCountOutputTypeSelectSchema';

export const ToDoListCountOutputTypeArgsSchema: z.ZodType<Prisma.ToDoListCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ToDoListCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ToDoListCountOutputTypeSelectSchema;
