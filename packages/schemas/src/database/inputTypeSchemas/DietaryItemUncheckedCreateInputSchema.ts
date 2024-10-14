import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietUncheckedCreateNestedManyWithoutItemsInputSchema } from './DietUncheckedCreateNestedManyWithoutItemsInputSchema';
import { ServingUncheckedCreateNestedManyWithoutItemInputSchema } from './ServingUncheckedCreateNestedManyWithoutItemInputSchema';

export const DietaryItemUncheckedCreateInputSchema: z.ZodType<Prisma.DietaryItemUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  barcode: z.string().optional().nullable(),
  gi: z.number().int().optional().nullable(),
  calsPerOz: z.number().optional().nullable(),
  glutenFree: z.boolean().optional(),
  minimalFructose: z.boolean().optional(),
  natural: z.boolean().optional(),
  organic: z.boolean().optional(),
  impactScore: z.number().optional(),
  Diet: z.lazy(() => DietUncheckedCreateNestedManyWithoutItemsInputSchema).optional(),
  Serving: z.lazy(() => ServingUncheckedCreateNestedManyWithoutItemInputSchema).optional()
}).strict();

export default DietaryItemUncheckedCreateInputSchema;
