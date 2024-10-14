import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MdxNoteWhereInputSchema } from '../inputTypeSchemas/MdxNoteWhereInputSchema'
import { MdxNoteOrderByWithRelationInputSchema } from '../inputTypeSchemas/MdxNoteOrderByWithRelationInputSchema'
import { MdxNoteWhereUniqueInputSchema } from '../inputTypeSchemas/MdxNoteWhereUniqueInputSchema'

export const MdxNoteAggregateArgsSchema: z.ZodType<Prisma.MdxNoteAggregateArgs> = z.object({
  where: MdxNoteWhereInputSchema.optional(),
  orderBy: z.union([ MdxNoteOrderByWithRelationInputSchema.array(),MdxNoteOrderByWithRelationInputSchema ]).optional(),
  cursor: MdxNoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MdxNoteAggregateArgsSchema;
