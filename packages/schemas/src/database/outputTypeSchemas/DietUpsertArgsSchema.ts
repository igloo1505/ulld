import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DietIncludeSchema } from '../inputTypeSchemas/DietIncludeSchema.js'
import { DietWhereUniqueInputSchema } from '../inputTypeSchemas/DietWhereUniqueInputSchema.js'
import { DietCreateInputSchema } from '../inputTypeSchemas/DietCreateInputSchema.js'
import { DietUncheckedCreateInputSchema } from '../inputTypeSchemas/DietUncheckedCreateInputSchema.js'
import { DietUpdateInputSchema } from '../inputTypeSchemas/DietUpdateInputSchema.js'
import { DietUncheckedUpdateInputSchema } from '../inputTypeSchemas/DietUncheckedUpdateInputSchema.js'
import { DietaryItemFindManyArgsSchema } from "../outputTypeSchemas/DietaryItemFindManyArgsSchema"
import { TimePeriodFindManyArgsSchema } from "../outputTypeSchemas/TimePeriodFindManyArgsSchema"
import { HealthReportFindManyArgsSchema } from "../outputTypeSchemas/HealthReportFindManyArgsSchema"
import { DietCountOutputTypeArgsSchema } from "../outputTypeSchemas/DietCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DietSelectSchema: z.ZodType<Prisma.DietSelect> = z.object({
  name: z.boolean().optional(),
  summary: z.boolean().optional(),
  activelyFollowing: z.boolean().optional(),
  gf: z.boolean().optional(),
  vegan: z.boolean().optional(),
  pescatarian: z.boolean().optional(),
  vegetarian: z.boolean().optional(),
  fasting: z.boolean().optional(),
  cardioTraining: z.boolean().optional(),
  weightTraining: z.boolean().optional(),
  carb: z.boolean().optional(),
  pro: z.boolean().optional(),
  fat: z.boolean().optional(),
  goals: z.boolean().optional(),
  created: z.boolean().optional(),
  lastUpdate: z.boolean().optional(),
  items: z.union([z.boolean(),z.lazy(() => DietaryItemFindManyArgsSchema)]).optional(),
  periodsFollowed: z.union([z.boolean(),z.lazy(() => TimePeriodFindManyArgsSchema)]).optional(),
  HealthReport: z.union([z.boolean(),z.lazy(() => HealthReportFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DietCountOutputTypeArgsSchema)]).optional(),
}).strict()
export const DietUpsertArgsSchema: z.ZodType<Prisma.DietUpsertArgs> = z.object({
  select: DietSelectSchema.optional(),
  include: DietIncludeSchema.optional(),
  where: DietWhereUniqueInputSchema,
  create: z.union([ DietCreateInputSchema,DietUncheckedCreateInputSchema ]),
  update: z.union([ DietUpdateInputSchema,DietUncheckedUpdateInputSchema ]),
}).strict() ;
export default DietUpsertArgsSchema;