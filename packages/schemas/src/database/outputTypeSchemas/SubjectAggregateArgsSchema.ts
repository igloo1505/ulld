import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SubjectWhereInputSchema.js
..//inputTypeSchemas/SubjectOrderByWithRelationInputSchema.js
..//inputTypeSchemas/SubjectWhereUniqueInputSchema.js
export const SubjectAggregateArgsSchema: z.ZodType<Prisma.SubjectAggregateArgs> = z.object({
  where: SubjectWhereInputSchema.optional(),
  orderBy: z.union([ SubjectOrderByWithRelationInputSchema.array(),SubjectOrderByWithRelationInputSchema ]).optional(),
  cursor: SubjectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SubjectAggregateArgsSchema;