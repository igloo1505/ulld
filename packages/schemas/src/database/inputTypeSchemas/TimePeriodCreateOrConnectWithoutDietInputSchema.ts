import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TimePeriodWhereUniqueInputSchema } from './TimePeriodWhereUniqueInputSchema';
import { TimePeriodCreateWithoutDietInputSchema } from './TimePeriodCreateWithoutDietInputSchema';
import { TimePeriodUncheckedCreateWithoutDietInputSchema } from './TimePeriodUncheckedCreateWithoutDietInputSchema';

export const TimePeriodCreateOrConnectWithoutDietInputSchema: z.ZodType<Prisma.TimePeriodCreateOrConnectWithoutDietInput> = z.object({
  where: z.lazy(() => TimePeriodWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TimePeriodCreateWithoutDietInputSchema),z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema) ]),
}).strict();

export default TimePeriodCreateOrConnectWithoutDietInputSchema;
