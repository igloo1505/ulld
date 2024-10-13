import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TimePeriodWhereUniqueInputSchema } from '../TimePeriodWhereUniqueInputSchema.js';
import { TimePeriodUpdateWithoutDietInputSchema } from '../TimePeriodUpdateWithoutDietInputSchema.js';
import { TimePeriodUncheckedUpdateWithoutDietInputSchema } from '../TimePeriodUncheckedUpdateWithoutDietInputSchema.js';
import { TimePeriodCreateWithoutDietInputSchema } from '../TimePeriodCreateWithoutDietInputSchema.js';
import { TimePeriodUncheckedCreateWithoutDietInputSchema } from '../TimePeriodUncheckedCreateWithoutDietInputSchema.js';
export const TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema: z.ZodType<Prisma.TimePeriodUpsertWithWhereUniqueWithoutDietInput> = z.object({
  where: z.lazy(() => TimePeriodWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TimePeriodUpdateWithoutDietInputSchema),z.lazy(() => TimePeriodUncheckedUpdateWithoutDietInputSchema) ]),
  create: z.union([ z.lazy(() => TimePeriodCreateWithoutDietInputSchema),z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema) ]),
}).strict();
export default TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema;