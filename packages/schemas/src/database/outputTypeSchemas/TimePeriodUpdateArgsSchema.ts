import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TimePeriodIncludeSchema } from '../inputTypeSchemas/TimePeriodIncludeSchema'
import { TimePeriodUpdateInputSchema } from '../inputTypeSchemas/TimePeriodUpdateInputSchema'
import { TimePeriodUncheckedUpdateInputSchema } from '../inputTypeSchemas/TimePeriodUncheckedUpdateInputSchema'
import { TimePeriodWhereUniqueInputSchema } from '../inputTypeSchemas/TimePeriodWhereUniqueInputSchema'
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

export const TimePeriodUpdateArgsSchema: z.ZodType<Prisma.TimePeriodUpdateArgs> = z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  data: z.union([ TimePeriodUpdateInputSchema,TimePeriodUncheckedUpdateInputSchema ]),
  where: TimePeriodWhereUniqueInputSchema,
}).strict() ;

export default TimePeriodUpdateArgsSchema;
