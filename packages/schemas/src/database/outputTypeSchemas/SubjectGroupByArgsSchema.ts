import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SubjectWhereInputSchema } from '../inputTypeSchemas/SubjectWhereInputSchema.js'
import { SubjectOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SubjectOrderByWithAggregationInputSchema.js'
import { SubjectScalarFieldEnumSchema } from '../inputTypeSchemas/SubjectScalarFieldEnumSchema.js'
import { SubjectScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SubjectScalarWhereWithAggregatesInputSchema.js'
export const SubjectGroupByArgsSchema: z.ZodType<Prisma.SubjectGroupByArgs> = z.object({
  where: SubjectWhereInputSchema.optional(),
  orderBy: z.union([ SubjectOrderByWithAggregationInputSchema.array(),SubjectOrderByWithAggregationInputSchema ]).optional(),
  by: SubjectScalarFieldEnumSchema.array(),
  having: SubjectScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SubjectGroupByArgsSchema;