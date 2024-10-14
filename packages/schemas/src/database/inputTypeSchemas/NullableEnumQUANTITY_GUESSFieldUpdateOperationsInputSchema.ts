import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema';

export const NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumQUANTITY_GUESSFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable()
}).strict();

export default NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema;
