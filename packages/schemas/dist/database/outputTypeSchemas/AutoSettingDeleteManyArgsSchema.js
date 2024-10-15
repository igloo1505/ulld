import { z } from 'zod';
import { AutoSettingWhereInputSchema } from '../inputTypeSchemas/AutoSettingWhereInputSchema.js';
export const AutoSettingDeleteManyArgsSchema = z.object({
    where: AutoSettingWhereInputSchema.optional(),
}).strict();
export default AutoSettingDeleteManyArgsSchema;
