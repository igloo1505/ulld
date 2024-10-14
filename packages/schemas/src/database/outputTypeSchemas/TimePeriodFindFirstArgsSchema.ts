import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TimePeriodIncludeSchema } from '../inputTypeSchemas/TimePeriodIncludeSchema'
import { TimePeriodWhereInputSchema } from '../inputTypeSchemas/TimePeriodWhereInputSchema'
import { TimePeriodOrderByWithRelationInputSchema } from '../inputTypeSchemas/TimePeriodOrderByWithRelationInputSchema'
import { TimePeriodWhereUniqueInputSchema } from '../inputTypeSchemas/TimePeriodWhereUniqueInputSchema'
import { TimePeriodScalarFieldEnumSchema } from '../inputTypeSchemas/TimePeriodScalarFieldEnumSchema'
import { DietArgsSchema } from "../outputTypeSchemas/DietArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TimePeriodSelectSchema: z.ZodType<Prisma.TimePeriodSelect> = z.object({
  id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  dietId: z.boolean().optional(),
  Diet: z.union([z.boolean(),z.lazy(() => DietArgsSchema)]).optional(),
}).strict()

export const TimePeriodFindFirstArgsSchema: z.ZodType<Prisma.TimePeriodFindFirstArgs> = z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  where: TimePeriodWhereInputSchema.optional(),
  orderBy: z.union([ TimePeriodOrderByWithRelationInputSchema.array(),TimePeriodOrderByWithRelationInputSchema ]).optional(),
  cursor: TimePeriodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TimePeriodScalarFieldEnumSchema,TimePeriodScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default TimePeriodFindFirstArgsSchema;
