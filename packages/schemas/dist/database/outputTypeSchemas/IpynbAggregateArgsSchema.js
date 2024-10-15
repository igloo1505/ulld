import { z } from 'zod';
import { IpynbWhereInputSchema } from '../inputTypeSchemas/IpynbWhereInputSchema.js';
import { IpynbOrderByWithRelationInputSchema } from '../inputTypeSchemas/IpynbOrderByWithRelationInputSchema.js';
import { IpynbWhereUniqueInputSchema } from '../inputTypeSchemas/IpynbWhereUniqueInputSchema.js';
export const IpynbAggregateArgsSchema = z.object({
    where: IpynbWhereInputSchema.optional(),
    orderBy: z.union([IpynbOrderByWithRelationInputSchema.array(), IpynbOrderByWithRelationInputSchema]).optional(),
    cursor: IpynbWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default IpynbAggregateArgsSchema;
