import { z } from 'zod';
import { autoSettingSchema } from './autoSettingSchema.js';
export const AutoSettingCreateManyInputSchema = z.object({
    id: z.number().int().optional(),
    type: z.lazy(() => autoSettingSchema),
    glob: z.string(),
    value: z.string()
}).strict();
export default AutoSettingCreateManyInputSchema;
