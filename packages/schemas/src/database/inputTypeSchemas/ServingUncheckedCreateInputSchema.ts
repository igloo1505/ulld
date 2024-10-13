import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QUANTITY_GUESSSchema } from '../QUANTITY_GUESSSchema.js';
export const ServingUncheckedCreateInputSchema: z.ZodType<Prisma.ServingUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  dietaryItemId: z.number().int(),
  quant_oz: z.number().optional().nullable(),
  quant_guess: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable()
}).strict();
export default ServingUncheckedCreateInputSchema;