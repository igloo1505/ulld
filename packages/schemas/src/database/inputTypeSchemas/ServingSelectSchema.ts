import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryItemArgsSchema } from "../outputTypeSchemas/DietaryItemArgsSchema"

export const ServingSelectSchema: z.ZodType<Prisma.ServingSelect> = z.object({
  id: z.boolean().optional(),
  dietaryItemId: z.boolean().optional(),
  quant_oz: z.boolean().optional(),
  quant_guess: z.boolean().optional(),
  item: z.union([z.boolean(),z.lazy(() => DietaryItemArgsSchema)]).optional(),
}).strict()

export default ServingSelectSchema;
