import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema';
import { DietaryItemCreateNestedOneWithoutServingInputSchema } from './DietaryItemCreateNestedOneWithoutServingInputSchema';

export const ServingCreateInputSchema: z.ZodType<Prisma.ServingCreateInput> = z.object({
  quant_oz: z.number().optional().nullable(),
  quant_guess: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable(),
  item: z.lazy(() => DietaryItemCreateNestedOneWithoutServingInputSchema)
}).strict();

export default ServingCreateInputSchema;
