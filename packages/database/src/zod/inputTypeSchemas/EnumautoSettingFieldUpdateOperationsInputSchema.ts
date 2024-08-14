import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { autoSettingSchema } from './autoSettingSchema';

export const EnumautoSettingFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumautoSettingFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => autoSettingSchema).optional()
}).strict();

export default EnumautoSettingFieldUpdateOperationsInputSchema;
