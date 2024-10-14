import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FeatureRequestUpdatecategoryInputSchema } from './FeatureRequestUpdatecategoryInputSchema';
import { FeatureRequestUpdateuserBaseInputSchema } from './FeatureRequestUpdateuserBaseInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const FeatureRequestUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FeatureRequestUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => FeatureRequestUpdatecategoryInputSchema),z.string().array() ]).optional(),
  userBase: z.union([ z.lazy(() => FeatureRequestUpdateuserBaseInputSchema),z.string().array() ]).optional(),
  receivedOn: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default FeatureRequestUncheckedUpdateManyInputSchema;
