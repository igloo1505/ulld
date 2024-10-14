import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuoteCreateInputSchema } from '../inputTypeSchemas/QuoteCreateInputSchema'
import { QuoteUncheckedCreateInputSchema } from '../inputTypeSchemas/QuoteUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const QuoteSelectSchema: z.ZodType<Prisma.QuoteSelect> = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const QuoteCreateArgsSchema: z.ZodType<Prisma.QuoteCreateArgs> = z.object({
  select: QuoteSelectSchema.optional(),
  data: z.union([ QuoteCreateInputSchema,QuoteUncheckedCreateInputSchema ]),
}).strict() ;

export default QuoteCreateArgsSchema;
