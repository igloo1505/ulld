import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { autoSettingSchema } from '../autoSettingSchema.js';
import { EnumautoSettingFieldUpdateOperationsInputSchema } from '../EnumautoSettingFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from '../StringFieldUpdateOperationsInputSchema.js';
export const AutoSettingUpdateManyMutationInputSchema: z.ZodType<Prisma.AutoSettingUpdateManyMutationInput> = z.object({
  type: z.union([ z.lazy(() => autoSettingSchema),z.lazy(() => EnumautoSettingFieldUpdateOperationsInputSchema) ]).optional(),
  glob: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();
export default AutoSettingUpdateManyMutationInputSchema;