import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const QuoteCreateInputSchema: z.ZodType<Prisma.QuoteCreateInput> = z.object({
  body: z.string(),
  author: z.string(),
  source: z.string().optional().nullable(),
  pinned: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export default QuoteCreateInputSchema;