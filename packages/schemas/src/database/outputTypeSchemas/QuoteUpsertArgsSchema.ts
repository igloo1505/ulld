import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuoteWhereUniqueInputSchema } from '../inputTypeSchemas/QuoteWhereUniqueInputSchema'
import { QuoteCreateInputSchema } from '../inputTypeSchemas/QuoteCreateInputSchema'
import { QuoteUncheckedCreateInputSchema } from '../inputTypeSchemas/QuoteUncheckedCreateInputSchema'
import { QuoteUpdateInputSchema } from '../inputTypeSchemas/QuoteUpdateInputSchema'
import { QuoteUncheckedUpdateInputSchema } from '../inputTypeSchemas/QuoteUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const QuoteSelectSchema: z.ZodType<Prisma.QuoteSelect> = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const QuoteUpsertArgsSchema: z.ZodType<Prisma.QuoteUpsertArgs> = z.object({
  select: QuoteSelectSchema.optional(),
  where: QuoteWhereUniqueInputSchema,
  create: z.union([ QuoteCreateInputSchema,QuoteUncheckedCreateInputSchema ]),
  update: z.union([ QuoteUpdateInputSchema,QuoteUncheckedUpdateInputSchema ]),
}).strict() ;

export default QuoteUpsertArgsSchema;
