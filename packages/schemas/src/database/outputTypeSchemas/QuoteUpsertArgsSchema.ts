import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/QuoteWhereUniqueInputSchema.js
..//inputTypeSchemas/QuoteCreateInputSchema.js
..//inputTypeSchemas/QuoteUncheckedCreateInputSchema.js
..//inputTypeSchemas/QuoteUpdateInputSchema.js
..//inputTypeSchemas/QuoteUncheckedUpdateInputSchema.js
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