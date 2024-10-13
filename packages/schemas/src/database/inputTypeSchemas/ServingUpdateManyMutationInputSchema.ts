import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { NullableFloatFieldUpdateOperationsInputSchema } from '../NullableFloatFieldUpdateOperationsInputSchema.js';
import { QUANTITY_GUESSSchema } from '../QUANTITY_GUESSSchema.js';
import { NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema } from '../NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema.js';
export const ServingUpdateManyMutationInputSchema: z.ZodType<Prisma.ServingUpdateManyMutationInput> = z.object({
  quant_oz: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quant_guess: z.union([ z.lazy(() => QUANTITY_GUESSSchema),z.lazy(() => NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();
export default ServingUpdateManyMutationInputSchema;