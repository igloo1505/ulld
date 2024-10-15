import { z } from 'zod';
import { autoSettingSchema } from './autoSettingSchema.js';
export const AutoSettingCreateInputSchema = z.object({
    type: z.lazy(() => autoSettingSchema),
    glob: z.string(),
    value: z.string()
}).strict();
export default AutoSettingCreateInputSchema;
