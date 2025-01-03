import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { MdxNoteWhereInputSchema } from '../inputTypeSchemas/MdxNoteWhereInputSchema.js'
import { MdxNoteOrderByWithAggregationInputSchema } from '../inputTypeSchemas/MdxNoteOrderByWithAggregationInputSchema.js'
import { MdxNoteScalarFieldEnumSchema } from '../inputTypeSchemas/MdxNoteScalarFieldEnumSchema.js'
import { MdxNoteScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/MdxNoteScalarWhereWithAggregatesInputSchema.js'
export const MdxNoteGroupByArgsSchema: z.ZodType<Prisma.MdxNoteGroupByArgs> = z.object({
  where: MdxNoteWhereInputSchema.optional(),
  orderBy: z.union([ MdxNoteOrderByWithAggregationInputSchema.array(),MdxNoteOrderByWithAggregationInputSchema ]).optional(),
  by: MdxNoteScalarFieldEnumSchema.array(),
  having: MdxNoteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default MdxNoteGroupByArgsSchema;