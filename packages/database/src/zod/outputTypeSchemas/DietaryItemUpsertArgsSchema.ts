import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryItemIncludeSchema } from '../inputTypeSchemas/DietaryItemIncludeSchema'
import { DietaryItemWhereUniqueInputSchema } from '../inputTypeSchemas/DietaryItemWhereUniqueInputSchema'
import { DietaryItemCreateInputSchema } from '../inputTypeSchemas/DietaryItemCreateInputSchema'
import { DietaryItemUncheckedCreateInputSchema } from '../inputTypeSchemas/DietaryItemUncheckedCreateInputSchema'
import { DietaryItemUpdateInputSchema } from '../inputTypeSchemas/DietaryItemUpdateInputSchema'
import { DietaryItemUncheckedUpdateInputSchema } from '../inputTypeSchemas/DietaryItemUncheckedUpdateInputSchema'
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

export const DietaryItemUpsertArgsSchema: z.ZodType<Prisma.DietaryItemUpsertArgs> = z.object({
  select: DietaryItemSelectSchema.optional(),
  include: DietaryItemIncludeSchema.optional(),
  where: DietaryItemWhereUniqueInputSchema,
  create: z.union([ DietaryItemCreateInputSchema,DietaryItemUncheckedCreateInputSchema ]),
  update: z.union([ DietaryItemUpdateInputSchema,DietaryItemUncheckedUpdateInputSchema ]),
}).strict() ;

export default DietaryItemUpsertArgsSchema;
