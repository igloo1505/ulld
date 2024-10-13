import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/MdxNoteWhereInputSchema.js
..//inputTypeSchemas/MdxNoteOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/MdxNoteScalarFieldEnumSchema.js
..//inputTypeSchemas/MdxNoteScalarWhereWithAggregatesInputSchema.js
export const MdxNoteGroupByArgsSchema: z.ZodType<Prisma.MdxNoteGroupByArgs> = z.object({
  where: MdxNoteWhereInputSchema.optional(),
  orderBy: z.union([ MdxNoteOrderByWithAggregationInputSchema.array(),MdxNoteOrderByWithAggregationInputSchema ]).optional(),
  by: MdxNoteScalarFieldEnumSchema.array(),
  having: MdxNoteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default MdxNoteGroupByArgsSchema;