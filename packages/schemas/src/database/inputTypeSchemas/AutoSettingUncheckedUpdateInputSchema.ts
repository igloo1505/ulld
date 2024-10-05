import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { autoSettingSchema } from './autoSettingSchema';
import { EnumautoSettingFieldUpdateOperationsInputSchema } from './EnumautoSettingFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const AutoSettingUncheckedUpdateInputSchema: z.ZodType<Prisma.AutoSettingUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => autoSettingSchema),z.lazy(() => EnumautoSettingFieldUpdateOperationsInputSchema) ]).optional(),
  glob: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default AutoSettingUncheckedUpdateInputSchema;
