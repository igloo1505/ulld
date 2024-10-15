import { z } from 'zod';
import { SettingsUpdateManyMutationInputSchema } from '../inputTypeSchemas/SettingsUpdateManyMutationInputSchema.js';
import { SettingsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SettingsUncheckedUpdateManyInputSchema.js';
import { SettingsWhereInputSchema } from '../inputTypeSchemas/SettingsWhereInputSchema.js';
export const SettingsUpdateManyArgsSchema = z.object({
    data: z.union([SettingsUpdateManyMutationInputSchema, SettingsUncheckedUpdateManyInputSchema]),
    where: SettingsWhereInputSchema.optional(),
}).strict();
export default SettingsUpdateManyArgsSchema;
