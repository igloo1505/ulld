import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/PracticeExamWhereInputSchema.js
..//inputTypeSchemas/PracticeExamOrderByWithRelationInputSchema.js
..//inputTypeSchemas/PracticeExamWhereUniqueInputSchema.js
export const PracticeExamAggregateArgsSchema: z.ZodType<Prisma.PracticeExamAggregateArgs> = z.object({
  where: PracticeExamWhereInputSchema.optional(),
  orderBy: z.union([ PracticeExamOrderByWithRelationInputSchema.array(),PracticeExamOrderByWithRelationInputSchema ]).optional(),
  cursor: PracticeExamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default PracticeExamAggregateArgsSchema;