import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const QAPairCountOutputTypeSelectSchema: z.ZodType<Prisma.QAPairCountOutputTypeSelect> = z.object({
  tags: z.boolean().optional(),
  topics: z.boolean().optional(),
  subjects: z.boolean().optional(),
  practiceExam: z.boolean().optional(),
}).strict();

export default QAPairCountOutputTypeSelectSchema;
