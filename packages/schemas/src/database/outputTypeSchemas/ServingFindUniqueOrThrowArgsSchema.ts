import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServingIncludeSchema } from '../inputTypeSchemas/ServingIncludeSchema'
import { ServingWhereUniqueInputSchema } from '../inputTypeSchemas/ServingWhereUniqueInputSchema'
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

export const ServingFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ServingFindUniqueOrThrowArgs> = z.object({
  select: ServingSelectSchema.optional(),
  include: ServingIncludeSchema.optional(),
  where: ServingWhereUniqueInputSchema,
}).strict() ;

export default ServingFindUniqueOrThrowArgsSchema;
