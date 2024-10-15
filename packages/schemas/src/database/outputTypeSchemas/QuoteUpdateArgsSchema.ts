import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { QuoteUpdateInputSchema } from '../inputTypeSchemas/QuoteUpdateInputSchema.js'
import { QuoteUncheckedUpdateInputSchema } from '../inputTypeSchemas/QuoteUncheckedUpdateInputSchema.js'
import { QuoteWhereUniqueInputSchema } from '../inputTypeSchemas/QuoteWhereUniqueInputSchema.js'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const QuoteSelectSchema: z.ZodType<Prisma.QuoteSelect> = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()
export const QuoteUpdateArgsSchema: z.ZodType<Prisma.QuoteUpdateArgs> = z.object({
  select: QuoteSelectSchema.optional(),
  data: z.union([ QuoteUpdateInputSchema,QuoteUncheckedUpdateInputSchema ]),
  where: QuoteWhereUniqueInputSchema,
}).strict() ;
export default QuoteUpdateArgsSchema;