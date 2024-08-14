import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema';
import { NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema } from './NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema';

export const ServingUncheckedUpdateInputSchema: z.ZodType<Prisma.ServingUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  dietaryItemId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quant_oz: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quant_guess: z.union([ z.lazy(() => QUANTITY_GUESSSchema),z.lazy(() => NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export default ServingUncheckedUpdateInputSchema;
