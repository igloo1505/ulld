import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietFindManyArgsSchema } from "../outputTypeSchemas/DietFindManyArgsSchema"
import { ServingFindManyArgsSchema } from "../outputTypeSchemas/ServingFindManyArgsSchema"
import { DietaryItemCountOutputTypeArgsSchema } from "../outputTypeSchemas/DietaryItemCountOutputTypeArgsSchema"

export const DietaryItemSelectSchema: z.ZodType<Prisma.DietaryItemSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  barcode: z.boolean().optional(),
  gi: z.boolean().optional(),
  calsPerOz: z.boolean().optional(),
  glutenFree: z.boolean().optional(),
  minimalFructose: z.boolean().optional(),
  natural: z.boolean().optional(),
  organic: z.boolean().optional(),
  impactScore: z.boolean().optional(),
  Diet: z.union([z.boolean(),z.lazy(() => DietFindManyArgsSchema)]).optional(),
  Serving: z.union([z.boolean(),z.lazy(() => ServingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DietaryItemCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DietaryItemSelectSchema;
