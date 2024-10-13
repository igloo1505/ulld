import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const ToDoCountOutputTypeSelectSchema: z.ZodType<Prisma.ToDoCountOutputTypeSelect> = z.object({
  associatedNotes: z.boolean().optional(),
  tags: z.boolean().optional(),
  topics: z.boolean().optional(),
  subjects: z.boolean().optional(),
  child: z.boolean().optional(),
}).strict();
export default ToDoCountOutputTypeSelectSchema;