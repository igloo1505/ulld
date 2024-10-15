import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TimePeriodWhereUniqueInputSchema } from './TimePeriodWhereUniqueInputSchema.js';
import { TimePeriodUpdateWithoutDietInputSchema } from './TimePeriodUpdateWithoutDietInputSchema.js';
import { TimePeriodUncheckedUpdateWithoutDietInputSchema } from './TimePeriodUncheckedUpdateWithoutDietInputSchema.js';
export const TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema: z.ZodType<Prisma.TimePeriodUpdateWithWhereUniqueWithoutDietInput> = z.object({
  where: z.lazy(() => TimePeriodWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TimePeriodUpdateWithoutDietInputSchema),z.lazy(() => TimePeriodUncheckedUpdateWithoutDietInputSchema) ]),
}).strict();
export default TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema;