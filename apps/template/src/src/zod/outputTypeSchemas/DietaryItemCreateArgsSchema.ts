import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryItemIncludeSchema } from '../inputTypeSchemas/DietaryItemIncludeSchema'
import { DietaryItemCreateInputSchema } from '../inputTypeSchemas/DietaryItemCreateInputSchema'
import { DietaryItemUncheckedCreateInputSchema } from '../inputTypeSchemas/DietaryItemUncheckedCreateInputSchema'
import { DietFindManyArgsSchema } from "../outputTypeSchemas/DietFindManyArgsSchema"
import { ServingFindManyArgsSchema } from "../outputTypeSchemas/ServingFindManyArgsSchema"
import { DietaryItemCountOutputTypeArgsSchema } from "../outputTypeSchemas/DietaryItemCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const DietaryItemCreateArgsSchema: z.ZodType<Prisma.DietaryItemCreateArgs> = z.object({
  select: DietaryItemSelectSchema.optional(),
  include: DietaryItemIncludeSchema.optional(),
  data: z.union([ DietaryItemCreateInputSchema,DietaryItemUncheckedCreateInputSchema ]),
}).strict() ;

export default DietaryItemCreateArgsSchema;
