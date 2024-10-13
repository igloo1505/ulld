import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ToDoCountOutputTypeSelectSchema } from '../ToDoCountOutputTypeSelectSchema.js';
export const ToDoCountOutputTypeArgsSchema: z.ZodType<Prisma.ToDoCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ToDoCountOutputTypeSelectSchema).nullish(),
}).strict();
export default ToDoCountOutputTypeSelectSchema;