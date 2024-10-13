import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/QuoteWhereInputSchema.js
..//inputTypeSchemas/QuoteOrderByWithRelationInputSchema.js
..//inputTypeSchemas/QuoteWhereUniqueInputSchema.js
..//inputTypeSchemas/QuoteScalarFieldEnumSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const QuoteSelectSchema: z.ZodType<Prisma.QuoteSelect> = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()
export const QuoteFindManyArgsSchema: z.ZodType<Prisma.QuoteFindManyArgs> = z.object({
  select: QuoteSelectSchema.optional(),
  where: QuoteWhereInputSchema.optional(),
  orderBy: z.union([ QuoteOrderByWithRelationInputSchema.array(),QuoteOrderByWithRelationInputSchema ]).optional(),
  cursor: QuoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuoteScalarFieldEnumSchema,QuoteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default QuoteFindManyArgsSchema;