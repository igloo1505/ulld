import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TimePeriodWhereUniqueInputSchema } from './TimePeriodWhereUniqueInputSchema.js';
import { TimePeriodCreateWithoutDietInputSchema } from './TimePeriodCreateWithoutDietInputSchema.js';
import { TimePeriodUncheckedCreateWithoutDietInputSchema } from './TimePeriodUncheckedCreateWithoutDietInputSchema.js';
export const TimePeriodCreateOrConnectWithoutDietInputSchema: z.ZodType<Prisma.TimePeriodCreateOrConnectWithoutDietInput> = z.object({
  where: z.lazy(() => TimePeriodWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TimePeriodCreateWithoutDietInputSchema),z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema) ]),
}).strict();
export default TimePeriodCreateOrConnectWithoutDietInputSchema;