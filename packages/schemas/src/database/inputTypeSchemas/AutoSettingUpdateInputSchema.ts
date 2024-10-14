import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { autoSettingSchema } from './autoSettingSchema';
import { EnumautoSettingFieldUpdateOperationsInputSchema } from './EnumautoSettingFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const AutoSettingUpdateInputSchema: z.ZodType<Prisma.AutoSettingUpdateInput> = z.object({
  type: z.union([ z.lazy(() => autoSettingSchema),z.lazy(() => EnumautoSettingFieldUpdateOperationsInputSchema) ]).optional(),
  glob: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default AutoSettingUpdateInputSchema;
