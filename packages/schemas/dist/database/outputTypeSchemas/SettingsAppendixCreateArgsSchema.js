import { z } from 'zod';
import { SettingsAppendixCreateInputSchema } from '../inputTypeSchemas/SettingsAppendixCreateInputSchema.js';
import { SettingsAppendixUncheckedCreateInputSchema } from '../inputTypeSchemas/SettingsAppendixUncheckedCreateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const SettingsAppendixSelectSchema = z.object({
    id: z.boolean().optional(),
    data: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
}).strict();
export const SettingsAppendixCreateArgsSchema = z.object({
    select: SettingsAppendixSelectSchema.optional(),
    data: z.union([SettingsAppendixCreateInputSchema, SettingsAppendixUncheckedCreateInputSchema]),
}).strict();
export default SettingsAppendixCreateArgsSchema;
