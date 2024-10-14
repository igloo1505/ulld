import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TimePeriodWhereUniqueInputSchema } from './TimePeriodWhereUniqueInputSchema';
import { TimePeriodUpdateWithoutDietInputSchema } from './TimePeriodUpdateWithoutDietInputSchema';
import { TimePeriodUncheckedUpdateWithoutDietInputSchema } from './TimePeriodUncheckedUpdateWithoutDietInputSchema';

export const TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema: z.ZodType<Prisma.TimePeriodUpdateWithWhereUniqueWithoutDietInput> = z.object({
  where: z.lazy(() => TimePeriodWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TimePeriodUpdateWithoutDietInputSchema),z.lazy(() => TimePeriodUncheckedUpdateWithoutDietInputSchema) ]),
}).strict();

export default TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema;
