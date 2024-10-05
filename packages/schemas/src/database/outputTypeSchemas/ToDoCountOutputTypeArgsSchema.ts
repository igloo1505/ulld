import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoCountOutputTypeSelectSchema } from './ToDoCountOutputTypeSelectSchema';

export const ToDoCountOutputTypeArgsSchema: z.ZodType<Prisma.ToDoCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ToDoCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ToDoCountOutputTypeSelectSchema;
