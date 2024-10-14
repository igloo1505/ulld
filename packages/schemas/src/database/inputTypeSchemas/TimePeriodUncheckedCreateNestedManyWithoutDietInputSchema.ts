import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TimePeriodCreateWithoutDietInputSchema } from './TimePeriodCreateWithoutDietInputSchema';
import { TimePeriodUncheckedCreateWithoutDietInputSchema } from './TimePeriodUncheckedCreateWithoutDietInputSchema';
import { TimePeriodCreateOrConnectWithoutDietInputSchema } from './TimePeriodCreateOrConnectWithoutDietInputSchema';
import { TimePeriodCreateManyDietInputEnvelopeSchema } from './TimePeriodCreateManyDietInputEnvelopeSchema';
import { TimePeriodWhereUniqueInputSchema } from './TimePeriodWhereUniqueInputSchema';

export const TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema: z.ZodType<Prisma.TimePeriodUncheckedCreateNestedManyWithoutDietInput> = z.object({
  create: z.union([ z.lazy(() => TimePeriodCreateWithoutDietInputSchema),z.lazy(() => TimePeriodCreateWithoutDietInputSchema).array(),z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema),z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema),z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TimePeriodCreateManyDietInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TimePeriodWhereUniqueInputSchema),z.lazy(() => TimePeriodWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema;
