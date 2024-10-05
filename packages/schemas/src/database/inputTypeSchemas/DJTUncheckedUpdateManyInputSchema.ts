import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BytesFieldUpdateOperationsInputSchema } from './BytesFieldUpdateOperationsInputSchema';

export const DJTUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DJTUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.instanceof(Buffer),z.lazy(() => BytesFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default DJTUncheckedUpdateManyInputSchema;
