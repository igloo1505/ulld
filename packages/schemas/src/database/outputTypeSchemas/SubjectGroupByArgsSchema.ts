import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubjectWhereInputSchema } from '../inputTypeSchemas/SubjectWhereInputSchema'
import { SubjectOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SubjectOrderByWithAggregationInputSchema'
import { SubjectScalarFieldEnumSchema } from '../inputTypeSchemas/SubjectScalarFieldEnumSchema'
import { SubjectScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SubjectScalarWhereWithAggregatesInputSchema'

export const SubjectGroupByArgsSchema: z.ZodType<Prisma.SubjectGroupByArgs> = z.object({
  where: SubjectWhereInputSchema.optional(),
  orderBy: z.union([ SubjectOrderByWithAggregationInputSchema.array(),SubjectOrderByWithAggregationInputSchema ]).optional(),
  by: SubjectScalarFieldEnumSchema.array(),
  having: SubjectScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SubjectGroupByArgsSchema;
