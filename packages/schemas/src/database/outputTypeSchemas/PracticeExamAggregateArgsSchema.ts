import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PracticeExamWhereInputSchema } from '../inputTypeSchemas/PracticeExamWhereInputSchema'
import { PracticeExamOrderByWithRelationInputSchema } from '../inputTypeSchemas/PracticeExamOrderByWithRelationInputSchema'
import { PracticeExamWhereUniqueInputSchema } from '../inputTypeSchemas/PracticeExamWhereUniqueInputSchema'

export const PracticeExamAggregateArgsSchema: z.ZodType<Prisma.PracticeExamAggregateArgs> = z.object({
  where: PracticeExamWhereInputSchema.optional(),
  orderBy: z.union([ PracticeExamOrderByWithRelationInputSchema.array(),PracticeExamOrderByWithRelationInputSchema ]).optional(),
  cursor: PracticeExamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PracticeExamAggregateArgsSchema;
