import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SubjectWhereInputSchema.js
..//inputTypeSchemas/SubjectOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/SubjectScalarFieldEnumSchema.js
..//inputTypeSchemas/SubjectScalarWhereWithAggregatesInputSchema.js
export const SubjectGroupByArgsSchema: z.ZodType<Prisma.SubjectGroupByArgs> = z.object({
  where: SubjectWhereInputSchema.optional(),
  orderBy: z.union([ SubjectOrderByWithAggregationInputSchema.array(),SubjectOrderByWithAggregationInputSchema ]).optional(),
  by: SubjectScalarFieldEnumSchema.array(),
  having: SubjectScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SubjectGroupByArgsSchema;