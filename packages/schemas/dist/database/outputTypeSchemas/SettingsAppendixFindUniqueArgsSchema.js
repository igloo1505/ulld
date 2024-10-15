import { z } from 'zod';
import { SettingsAppendixWhereUniqueInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const SettingsAppendixSelectSchema = z.object({
    id: z.boolean().optional(),
    data: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
}).strict();
export const SettingsAppendixFindUniqueArgsSchema = z.object({
    select: SettingsAppendixSelectSchema.optional(),
    where: SettingsAppendixWhereUniqueInputSchema,
}).strict();
export default SettingsAppendixFindUniqueArgsSchema;
