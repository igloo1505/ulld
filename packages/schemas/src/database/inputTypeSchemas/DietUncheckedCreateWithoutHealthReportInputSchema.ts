import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TERTIARY_TOGGLESchema } from './TERTIARY_TOGGLESchema';
import { DietCreategoalsInputSchema } from './DietCreategoalsInputSchema';
import { DIETARY_GOALSchema } from './DIETARY_GOALSchema';
import { DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema } from './DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema';
import { TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema } from './TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema';

export const DietUncheckedCreateWithoutHealthReportInputSchema: z.ZodType<Prisma.DietUncheckedCreateWithoutHealthReportInput> = z.object({
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
  items: z.lazy(() => DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema).optional(),
  periodsFollowed: z.lazy(() => TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema).optional()
}).strict();

export default DietUncheckedCreateWithoutHealthReportInputSchema;
