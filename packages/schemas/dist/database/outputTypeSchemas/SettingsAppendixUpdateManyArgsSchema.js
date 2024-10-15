import { z } from 'zod';
import { SettingsAppendixUpdateManyMutationInputSchema } from '../inputTypeSchemas/SettingsAppendixUpdateManyMutationInputSchema.js';
import { SettingsAppendixUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SettingsAppendixUncheckedUpdateManyInputSchema.js';
import { SettingsAppendixWhereInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereInputSchema.js';
export const SettingsAppendixUpdateManyArgsSchema = z.object({
    data: z.union([SettingsAppendixUpdateManyMutationInputSchema, SettingsAppendixUncheckedUpdateManyInputSchema]),
    where: SettingsAppendixWhereInputSchema.optional(),
}).strict();
export default SettingsAppendixUpdateManyArgsSchema;
