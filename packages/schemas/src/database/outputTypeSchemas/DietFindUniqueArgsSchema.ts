import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietIncludeSchema } from '../inputTypeSchemas/DietIncludeSchema'
import { DietWhereUniqueInputSchema } from '../inputTypeSchemas/DietWhereUniqueInputSchema'
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

export const DietFindUniqueArgsSchema: z.ZodType<Prisma.DietFindUniqueArgs> = z.object({
  select: DietSelectSchema.optional(),
  include: DietIncludeSchema.optional(),
  where: DietWhereUniqueInputSchema,
}).strict() ;

export default DietFindUniqueArgsSchema;
