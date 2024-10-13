import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from '../IntFieldUpdateOperationsInputSchema.js';
import { autoSettingSchema } from '../autoSettingSchema.js';
import { EnumautoSettingFieldUpdateOperationsInputSchema } from '../EnumautoSettingFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from '../StringFieldUpdateOperationsInputSchema.js';
export const AutoSettingUncheckedUpdateInputSchema: z.ZodType<Prisma.AutoSettingUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => autoSettingSchema),z.lazy(() => EnumautoSettingFieldUpdateOperationsInputSchema) ]).optional(),
  glob: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();
export default AutoSettingUncheckedUpdateInputSchema;