import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TERTIARY_TOGGLESchema } from './TERTIARY_TOGGLESchema';
import { DietCreategoalsInputSchema } from './DietCreategoalsInputSchema';
import { DIETARY_GOALSchema } from './DIETARY_GOALSchema';
import { TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema } from './TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema';
import { HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema } from './HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema';

export const DietUncheckedCreateWithoutItemsInputSchema: z.ZodType<Prisma.DietUncheckedCreateWithoutItemsInput> = z.object({
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
  periodsFollowed: z.lazy(() => TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema).optional(),
  HealthReport: z.lazy(() => HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema).optional()
}).strict();

export default DietUncheckedCreateWithoutItemsInputSchema;
