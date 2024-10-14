import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MdxNoteWhereInputSchema } from '../inputTypeSchemas/MdxNoteWhereInputSchema'
import { MdxNoteOrderByWithAggregationInputSchema } from '../inputTypeSchemas/MdxNoteOrderByWithAggregationInputSchema'
import { MdxNoteScalarFieldEnumSchema } from '../inputTypeSchemas/MdxNoteScalarFieldEnumSchema'
import { MdxNoteScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/MdxNoteScalarWhereWithAggregatesInputSchema'

export const MdxNoteGroupByArgsSchema: z.ZodType<Prisma.MdxNoteGroupByArgs> = z.object({
  where: MdxNoteWhereInputSchema.optional(),
  orderBy: z.union([ MdxNoteOrderByWithAggregationInputSchema.array(),MdxNoteOrderByWithAggregationInputSchema ]).optional(),
  by: MdxNoteScalarFieldEnumSchema.array(),
  having: MdxNoteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MdxNoteGroupByArgsSchema;
