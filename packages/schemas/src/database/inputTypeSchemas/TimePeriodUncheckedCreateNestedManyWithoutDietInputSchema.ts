import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TimePeriodCreateWithoutDietInputSchema } from './TimePeriodCreateWithoutDietInputSchema.js';
import { TimePeriodUncheckedCreateWithoutDietInputSchema } from './TimePeriodUncheckedCreateWithoutDietInputSchema.js';
import { TimePeriodCreateOrConnectWithoutDietInputSchema } from './TimePeriodCreateOrConnectWithoutDietInputSchema.js';
import { TimePeriodCreateManyDietInputEnvelopeSchema } from './TimePeriodCreateManyDietInputEnvelopeSchema.js';
import { TimePeriodWhereUniqueInputSchema } from './TimePeriodWhereUniqueInputSchema.js';
export const TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema: z.ZodType<Prisma.TimePeriodUncheckedCreateNestedManyWithoutDietInput> = z.object({
  create: z.union([ z.lazy(() => TimePeriodCreateWithoutDietInputSchema),z.lazy(() => TimePeriodCreateWithoutDietInputSchema).array(),z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema),z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema),z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TimePeriodCreateManyDietInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TimePeriodWhereUniqueInputSchema),z.lazy(() => TimePeriodWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema;