import { z } from 'zod';
import { SettingsAppendixCreateManyInputSchema } from '../inputTypeSchemas/SettingsAppendixCreateManyInputSchema.js';
export const SettingsAppendixCreateManyArgsSchema = z.object({
    data: z.union([SettingsAppendixCreateManyInputSchema, SettingsAppendixCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default SettingsAppendixCreateManyArgsSchema;
