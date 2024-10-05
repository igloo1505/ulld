import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TimePeriodCreateWithoutDietInputSchema } from './TimePeriodCreateWithoutDietInputSchema';
import { TimePeriodUncheckedCreateWithoutDietInputSchema } from './TimePeriodUncheckedCreateWithoutDietInputSchema';
import { TimePeriodCreateOrConnectWithoutDietInputSchema } from './TimePeriodCreateOrConnectWithoutDietInputSchema';
import { TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema } from './TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema';
import { TimePeriodCreateManyDietInputEnvelopeSchema } from './TimePeriodCreateManyDietInputEnvelopeSchema';
import { TimePeriodWhereUniqueInputSchema } from './TimePeriodWhereUniqueInputSchema';
import { TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema } from './TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema';
import { TimePeriodUpdateManyWithWhereWithoutDietInputSchema } from './TimePeriodUpdateManyWithWhereWithoutDietInputSchema';
import { TimePeriodScalarWhereInputSchema } from './TimePeriodScalarWhereInputSchema';

export const TimePeriodUpdateManyWithoutDietNestedInputSchema: z.ZodType<Prisma.TimePeriodUpdateManyWithoutDietNestedInput> = z.object({
  create: z.union([ z.lazy(() => TimePeriodCreateWithoutDietInputSchema),z.lazy(() => TimePeriodCreateWithoutDietInputSchema).array(),z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema),z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema),z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema),z.lazy(() => TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TimePeriodCreateManyDietInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TimePeriodWhereUniqueInputSchema),z.lazy(() => TimePeriodWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TimePeriodWhereUniqueInputSchema),z.lazy(() => TimePeriodWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TimePeriodWhereUniqueInputSchema),z.lazy(() => TimePeriodWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TimePeriodWhereUniqueInputSchema),z.lazy(() => TimePeriodWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema),z.lazy(() => TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TimePeriodUpdateManyWithWhereWithoutDietInputSchema),z.lazy(() => TimePeriodUpdateManyWithWhereWithoutDietInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TimePeriodScalarWhereInputSchema),z.lazy(() => TimePeriodScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TimePeriodUpdateManyWithoutDietNestedInputSchema;
