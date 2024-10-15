import { z } from 'zod';
import { PracticeExamWhereInputSchema } from '../inputTypeSchemas/PracticeExamWhereInputSchema.js';
import { PracticeExamOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PracticeExamOrderByWithAggregationInputSchema.js';
import { PracticeExamScalarFieldEnumSchema } from '../inputTypeSchemas/PracticeExamScalarFieldEnumSchema.js';
import { PracticeExamScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PracticeExamScalarWhereWithAggregatesInputSchema.js';
export const PracticeExamGroupByArgsSchema = z.object({
    where: PracticeExamWhereInputSchema.optional(),
    orderBy: z.union([PracticeExamOrderByWithAggregationInputSchema.array(), PracticeExamOrderByWithAggregationInputSchema]).optional(),
    by: PracticeExamScalarFieldEnumSchema.array(),
    having: PracticeExamScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default PracticeExamGroupByArgsSchema;
