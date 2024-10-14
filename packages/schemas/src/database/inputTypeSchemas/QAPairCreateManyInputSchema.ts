import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const QAPairCreateManyInputSchema: z.ZodType<Prisma.QAPairCreateManyInput> = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  description: z.string().optional().nullable(),
  secondaryLabel: z.string().optional().nullable(),
  correctCount: z.number().int().optional(),
  inCorrectCount: z.number().int().optional()
}).strict();

export default QAPairCreateManyInputSchema;
