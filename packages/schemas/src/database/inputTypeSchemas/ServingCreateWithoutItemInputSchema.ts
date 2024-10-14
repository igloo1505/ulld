import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema';

export const ServingCreateWithoutItemInputSchema: z.ZodType<Prisma.ServingCreateWithoutItemInput> = z.object({
  quant_oz: z.number().optional().nullable(),
  quant_guess: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable()
}).strict();

export default ServingCreateWithoutItemInputSchema;
