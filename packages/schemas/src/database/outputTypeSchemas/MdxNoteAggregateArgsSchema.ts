import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/MdxNoteWhereInputSchema.js
..//inputTypeSchemas/MdxNoteOrderByWithRelationInputSchema.js
..//inputTypeSchemas/MdxNoteWhereUniqueInputSchema.js
export const MdxNoteAggregateArgsSchema: z.ZodType<Prisma.MdxNoteAggregateArgs> = z.object({
  where: MdxNoteWhereInputSchema.optional(),
  orderBy: z.union([ MdxNoteOrderByWithRelationInputSchema.array(),MdxNoteOrderByWithRelationInputSchema ]).optional(),
  cursor: MdxNoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default MdxNoteAggregateArgsSchema;