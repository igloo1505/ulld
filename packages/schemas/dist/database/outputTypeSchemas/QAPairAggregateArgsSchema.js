import { z } from 'zod';
import { QAPairWhereInputSchema } from '../inputTypeSchemas/QAPairWhereInputSchema.js';
import { QAPairOrderByWithRelationInputSchema } from '../inputTypeSchemas/QAPairOrderByWithRelationInputSchema.js';
import { QAPairWhereUniqueInputSchema } from '../inputTypeSchemas/QAPairWhereUniqueInputSchema.js';
export const QAPairAggregateArgsSchema = z.object({
    where: QAPairWhereInputSchema.optional(),
    orderBy: z.union([QAPairOrderByWithRelationInputSchema.array(), QAPairOrderByWithRelationInputSchema]).optional(),
    cursor: QAPairWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default QAPairAggregateArgsSchema;
