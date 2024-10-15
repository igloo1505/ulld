import { z } from 'zod';
import { autoSettingSchema } from './autoSettingSchema.js';
export const EnumautoSettingFieldUpdateOperationsInputSchema = z.object({
    set: z.lazy(() => autoSettingSchema).optional()
}).strict();
export default EnumautoSettingFieldUpdateOperationsInputSchema;
