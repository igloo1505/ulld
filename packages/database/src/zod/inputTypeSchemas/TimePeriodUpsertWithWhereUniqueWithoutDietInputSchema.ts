import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TimePeriodWhereUniqueInputSchema } from './TimePeriodWhereUniqueInputSchema';
import { TimePeriodUpdateWithoutDietInputSchema } from './TimePeriodUpdateWithoutDietInputSchema';
import { TimePeriodUncheckedUpdateWithoutDietInputSchema } from './TimePeriodUncheckedUpdateWithoutDietInputSchema';
import { TimePeriodCreateWithoutDietInputSchema } from './TimePeriodCreateWithoutDietInputSchema';
import { TimePeriodUncheckedCreateWithoutDietInputSchema } from './TimePeriodUncheckedCreateWithoutDietInputSchema';

export const TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema: z.ZodType<Prisma.TimePeriodUpsertWithWhereUniqueWithoutDietInput> = z.object({
  where: z.lazy(() => TimePeriodWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TimePeriodUpdateWithoutDietInputSchema),z.lazy(() => TimePeriodUncheckedUpdateWithoutDietInputSchema) ]),
  create: z.union([ z.lazy(() => TimePeriodCreateWithoutDietInputSchema),z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema) ]),
}).strict();

export default TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema;
