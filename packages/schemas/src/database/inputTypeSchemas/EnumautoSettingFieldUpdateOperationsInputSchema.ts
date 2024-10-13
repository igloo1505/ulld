import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { autoSettingSchema } from '../autoSettingSchema.js';
export const EnumautoSettingFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumautoSettingFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => autoSettingSchema).optional()
}).strict();
export default EnumautoSettingFieldUpdateOperationsInputSchema;