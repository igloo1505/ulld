import { z } from 'zod';
import { SettingsAppendixUpdateInputSchema } from '../inputTypeSchemas/SettingsAppendixUpdateInputSchema.js';
import { SettingsAppendixUncheckedUpdateInputSchema } from '../inputTypeSchemas/SettingsAppendixUncheckedUpdateInputSchema.js';
import { SettingsAppendixWhereUniqueInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const SettingsAppendixSelectSchema = z.object({
    id: z.boolean().optional(),
    data: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
}).strict();
export const SettingsAppendixUpdateArgsSchema = z.object({
    select: SettingsAppendixSelectSchema.optional(),
    data: z.union([SettingsAppendixUpdateInputSchema, SettingsAppendixUncheckedUpdateInputSchema]),
    where: SettingsAppendixWhereUniqueInputSchema,
}).strict();
export default SettingsAppendixUpdateArgsSchema;
