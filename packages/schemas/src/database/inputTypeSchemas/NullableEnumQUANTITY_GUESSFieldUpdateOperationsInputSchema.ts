import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QUANTITY_GUESSSchema } from '../QUANTITY_GUESSSchema.js';
export const NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumQUANTITY_GUESSFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable()
}).strict();
export default NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema;