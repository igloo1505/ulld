import { z } from 'zod';
import { AutoSettingWhereInputSchema } from '../inputTypeSchemas/AutoSettingWhereInputSchema.js';
import { AutoSettingOrderByWithRelationInputSchema } from '../inputTypeSchemas/AutoSettingOrderByWithRelationInputSchema.js';
import { AutoSettingWhereUniqueInputSchema } from '../inputTypeSchemas/AutoSettingWhereUniqueInputSchema.js';
export const AutoSettingAggregateArgsSchema = z.object({
    where: AutoSettingWhereInputSchema.optional(),
    orderBy: z.union([AutoSettingOrderByWithRelationInputSchema.array(), AutoSettingOrderByWithRelationInputSchema]).optional(),
    cursor: AutoSettingWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default AutoSettingAggregateArgsSchema;
