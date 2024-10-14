import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PracticeExamCountOutputTypeSelectSchema: z.ZodType<Prisma.PracticeExamCountOutputTypeSelect> = z.object({
  topics: z.boolean().optional(),
  tags: z.boolean().optional(),
  subjects: z.boolean().optional(),
  questions: z.boolean().optional(),
}).strict();

export default PracticeExamCountOutputTypeSelectSchema;
