import { z } from 'zod';
import { BibWhereInputSchema } from '../inputTypeSchemas/BibWhereInputSchema.js';
import { BibOrderByWithRelationInputSchema } from '../inputTypeSchemas/BibOrderByWithRelationInputSchema.js';
import { BibWhereUniqueInputSchema } from '../inputTypeSchemas/BibWhereUniqueInputSchema.js';
export const BibAggregateArgsSchema = z.object({
    where: BibWhereInputSchema.optional(),
    orderBy: z.union([BibOrderByWithRelationInputSchema.array(), BibOrderByWithRelationInputSchema]).optional(),
    cursor: BibWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default BibAggregateArgsSchema;
