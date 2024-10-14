import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ToDoListCountOutputTypeSelectSchema } from './ToDoListCountOutputTypeSelectSchema.js';
export const ToDoListCountOutputTypeArgsSchema: z.ZodType<Prisma.ToDoListCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ToDoListCountOutputTypeSelectSchema).nullish(),
}).strict();
export default ToDoListCountOutputTypeSelectSchema;