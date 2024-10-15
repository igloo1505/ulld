import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ServingIncludeSchema } from '../inputTypeSchemas/ServingIncludeSchema.js'
import { ServingWhereUniqueInputSchema } from '../inputTypeSchemas/ServingWhereUniqueInputSchema.js'
import { ServingCreateInputSchema } from '../inputTypeSchemas/ServingCreateInputSchema.js'
import { ServingUncheckedCreateInputSchema } from '../inputTypeSchemas/ServingUncheckedCreateInputSchema.js'
import { ServingUpdateInputSchema } from '../inputTypeSchemas/ServingUpdateInputSchema.js'
import { ServingUncheckedUpdateInputSchema } from '../inputTypeSchemas/ServingUncheckedUpdateInputSchema.js'
import { DietaryItemArgsSchema } from "../outputTypeSchemas/DietaryItemArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const ServingSelectSchema: z.ZodType<Prisma.ServingSelect> = z.object({
  id: z.boolean().optional(),
  dietaryItemId: z.boolean().optional(),
  quant_oz: z.boolean().optional(),
  quant_guess: z.boolean().optional(),
  item: z.union([z.boolean(),z.lazy(() => DietaryItemArgsSchema)]).optional(),
}).strict()
export const ServingUpsertArgsSchema: z.ZodType<Prisma.ServingUpsertArgs> = z.object({
  select: ServingSelectSchema.optional(),
  include: ServingIncludeSchema.optional(),
  where: ServingWhereUniqueInputSchema,
  create: z.union([ ServingCreateInputSchema,ServingUncheckedCreateInputSchema ]),
  update: z.union([ ServingUpdateInputSchema,ServingUncheckedUpdateInputSchema ]),
}).strict() ;
export default ServingUpsertArgsSchema;