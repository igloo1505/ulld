import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const SubjectCountOutputTypeSelectSchema: z.ZodType<Prisma.SubjectCountOutputTypeSelect> = z.object({
  MdxNotes: z.boolean().optional(),
  IpynbNotes: z.boolean().optional(),
  QaPair: z.boolean().optional(),
  practiceExam: z.boolean().optional(),
  todoList: z.boolean().optional(),
  toDo: z.boolean().optional(),
  bibEntries: z.boolean().optional(),
  equations: z.boolean().optional(),
}).strict();

export default SubjectCountOutputTypeSelectSchema;
