import { z } from 'zod';
import { SettingsAppendixWhereInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereInputSchema.js';
import { SettingsAppendixOrderByWithRelationInputSchema } from '../inputTypeSchemas/SettingsAppendixOrderByWithRelationInputSchema.js';
import { SettingsAppendixWhereUniqueInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereUniqueInputSchema.js';
export const SettingsAppendixAggregateArgsSchema = z.object({
    where: SettingsAppendixWhereInputSchema.optional(),
    orderBy: z.union([SettingsAppendixOrderByWithRelationInputSchema.array(), SettingsAppendixOrderByWithRelationInputSchema]).optional(),
    cursor: SettingsAppendixWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default SettingsAppendixAggregateArgsSchema;
