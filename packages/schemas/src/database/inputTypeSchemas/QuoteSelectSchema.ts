import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const QuoteSelectSchema: z.ZodType<Prisma.QuoteSelect> = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export default QuoteSelectSchema;
