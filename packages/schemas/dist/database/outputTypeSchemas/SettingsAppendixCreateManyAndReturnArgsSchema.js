import { z } from 'zod';
import { SettingsAppendixCreateManyInputSchema } from '../inputTypeSchemas/SettingsAppendixCreateManyInputSchema.js';
export const SettingsAppendixCreateManyAndReturnArgsSchema = z.object({
    data: z.union([SettingsAppendixCreateManyInputSchema, SettingsAppendixCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default SettingsAppendixCreateManyAndReturnArgsSchema;
