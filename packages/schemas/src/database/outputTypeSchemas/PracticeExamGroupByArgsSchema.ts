import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PracticeExamWhereInputSchema } from '../inputTypeSchemas/PracticeExamWhereInputSchema'
import { PracticeExamOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PracticeExamOrderByWithAggregationInputSchema'
import { PracticeExamScalarFieldEnumSchema } from '../inputTypeSchemas/PracticeExamScalarFieldEnumSchema'
import { PracticeExamScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PracticeExamScalarWhereWithAggregatesInputSchema'

export const PracticeExamGroupByArgsSchema: z.ZodType<Prisma.PracticeExamGroupByArgs> = z.object({
  where: PracticeExamWhereInputSchema.optional(),
  orderBy: z.union([ PracticeExamOrderByWithAggregationInputSchema.array(),PracticeExamOrderByWithAggregationInputSchema ]).optional(),
  by: PracticeExamScalarFieldEnumSchema.array(),
  having: PracticeExamScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PracticeExamGroupByArgsSchema;
