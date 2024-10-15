import { z } from 'zod';
import { SettingsAppendixWhereInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereInputSchema.js';
export const SettingsAppendixDeleteManyArgsSchema = z.object({
    where: SettingsAppendixWhereInputSchema.optional(),
}).strict();
export default SettingsAppendixDeleteManyArgsSchema;
