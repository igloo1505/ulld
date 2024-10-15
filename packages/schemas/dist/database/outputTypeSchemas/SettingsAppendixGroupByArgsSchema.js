import { z } from 'zod';
import { SettingsAppendixWhereInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereInputSchema.js';
import { SettingsAppendixOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SettingsAppendixOrderByWithAggregationInputSchema.js';
import { SettingsAppendixScalarFieldEnumSchema } from '../inputTypeSchemas/SettingsAppendixScalarFieldEnumSchema.js';
import { SettingsAppendixScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SettingsAppendixScalarWhereWithAggregatesInputSchema.js';
export const SettingsAppendixGroupByArgsSchema = z.object({
    where: SettingsAppendixWhereInputSchema.optional(),
    orderBy: z.union([SettingsAppendixOrderByWithAggregationInputSchema.array(), SettingsAppendixOrderByWithAggregationInputSchema]).optional(),
    by: SettingsAppendixScalarFieldEnumSchema.array(),
    having: SettingsAppendixScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default SettingsAppendixGroupByArgsSchema;
