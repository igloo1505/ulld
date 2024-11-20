import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DietaryItemCreateManyInputSchema: z.ZodType<Prisma.DietaryItemCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  barcode: z.string().optional().nullable(),
  gi: z.number().int().optional().nullable(),
  calsPerOz: z.number().optional().nullable(),
  glutenFree: z.boolean().optional(),
  minimalFructose: z.boolean().optional(),
  natural: z.boolean().optional(),
  organic: z.boolean().optional(),
  impactScore: z.number().optional()
}).strict();

export default DietaryItemCreateManyInputSchema;
