import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TagCountOutputTypeSelectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = z.object({
  MdxNotes: z.boolean().optional(),
  bibEntries: z.boolean().optional(),
  ipynbNotes: z.boolean().optional(),
  QAPair: z.boolean().optional(),
  practiceExam: z.boolean().optional(),
  equations: z.boolean().optional(),
  toDo: z.boolean().optional(),
  todoList: z.boolean().optional(),
}).strict();

export default TagCountOutputTypeSelectSchema;
