import { z } from 'zod';
import { SettingsWhereInputSchema } from '../inputTypeSchemas/SettingsWhereInputSchema.js';
export const SettingsDeleteManyArgsSchema = z.object({
    where: SettingsWhereInputSchema.optional(),
}).strict();
export default SettingsDeleteManyArgsSchema;
