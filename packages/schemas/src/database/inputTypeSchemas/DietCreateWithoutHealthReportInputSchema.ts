import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TERTIARY_TOGGLESchema } from './TERTIARY_TOGGLESchema.js';
import { DietCreategoalsInputSchema } from './DietCreategoalsInputSchema.js';
import { DIETARY_GOALSchema } from './DIETARY_GOALSchema.js';
import { DietaryItemCreateNestedManyWithoutDietInputSchema } from './DietaryItemCreateNestedManyWithoutDietInputSchema.js';
import { TimePeriodCreateNestedManyWithoutDietInputSchema } from './TimePeriodCreateNestedManyWithoutDietInputSchema.js';
export const DietCreateWithoutHealthReportInputSchema: z.ZodType<Prisma.DietCreateWithoutHealthReportInput> = z.object({
  name: z.string(),
  summary: z.string().optional().nullable(),
  activelyFollowing: z.boolean().optional(),
  gf: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  vegan: z.boolean().optional(),
  pescatarian: z.boolean().optional(),
  vegetarian: z.boolean().optional(),
  fasting: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  cardioTraining: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  weightTraining: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  carb: z.number().optional().nullable(),
  pro: z.number().optional().nullable(),
  fat: z.number().optional().nullable(),
  goals: z.union([ z.lazy(() => DietCreategoalsInputSchema),z.lazy(() => DIETARY_GOALSchema).array() ]).optional(),
  created: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  items: z.lazy(() => DietaryItemCreateNestedManyWithoutDietInputSchema).optional(),
  periodsFollowed: z.lazy(() => TimePeriodCreateNestedManyWithoutDietInputSchema).optional()
}).strict();
export default DietCreateWithoutHealthReportInputSchema;