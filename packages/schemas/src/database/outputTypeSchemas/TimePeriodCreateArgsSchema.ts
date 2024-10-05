import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TimePeriodIncludeSchema } from '../inputTypeSchemas/TimePeriodIncludeSchema'
import { TimePeriodCreateInputSchema } from '../inputTypeSchemas/TimePeriodCreateInputSchema'
import { TimePeriodUncheckedCreateInputSchema } from '../inputTypeSchemas/TimePeriodUncheckedCreateInputSchema'
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

export const TimePeriodCreateArgsSchema: z.ZodType<Prisma.TimePeriodCreateArgs> = z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  data: z.union([ TimePeriodCreateInputSchema,TimePeriodUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export default TimePeriodCreateArgsSchema;
