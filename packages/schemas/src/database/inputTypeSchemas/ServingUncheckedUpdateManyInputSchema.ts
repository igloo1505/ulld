import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema.js';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema.js';
import { NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema } from './NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema.js';
export const ServingUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ServingUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  dietaryItemId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quant_oz: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quant_guess: z.union([ z.lazy(() => QUANTITY_GUESSSchema),z.lazy(() => NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();
export default ServingUncheckedUpdateManyInputSchema;