import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/TimePeriodIncludeSchema.js
..//inputTypeSchemas/TimePeriodWhereUniqueInputSchema.js
..//inputTypeSchemas/TimePeriodCreateInputSchema.js
..//inputTypeSchemas/TimePeriodUncheckedCreateInputSchema.js
..//inputTypeSchemas/TimePeriodUpdateInputSchema.js
..//inputTypeSchemas/TimePeriodUncheckedUpdateInputSchema.js
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
export const TimePeriodUpsertArgsSchema: z.ZodType<Prisma.TimePeriodUpsertArgs> = z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  where: TimePeriodWhereUniqueInputSchema,
  create: z.union([ TimePeriodCreateInputSchema,TimePeriodUncheckedCreateInputSchema ]),
  update: z.union([ TimePeriodUpdateInputSchema,TimePeriodUncheckedUpdateInputSchema ]),
}).strict() ;
export default TimePeriodUpsertArgsSchema;