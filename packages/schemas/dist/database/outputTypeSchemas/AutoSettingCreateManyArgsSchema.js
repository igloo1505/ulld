import { z } from 'zod';
import { AutoSettingCreateManyInputSchema } from '../inputTypeSchemas/AutoSettingCreateManyInputSchema.js';
export const AutoSettingCreateManyArgsSchema = z.object({
    data: z.union([AutoSettingCreateManyInputSchema, AutoSettingCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default AutoSettingCreateManyArgsSchema;
