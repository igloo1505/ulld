import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TimePeriodCreateWithoutDietInputSchema } from '../TimePeriodCreateWithoutDietInputSchema.js';
import { TimePeriodUncheckedCreateWithoutDietInputSchema } from '../TimePeriodUncheckedCreateWithoutDietInputSchema.js';
import { TimePeriodCreateOrConnectWithoutDietInputSchema } from '../TimePeriodCreateOrConnectWithoutDietInputSchema.js';
import { TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema } from '../TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema.js';
import { TimePeriodCreateManyDietInputEnvelopeSchema } from '../TimePeriodCreateManyDietInputEnvelopeSchema.js';
import { TimePeriodWhereUniqueInputSchema } from '../TimePeriodWhereUniqueInputSchema.js';
import { TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema } from '../TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema.js';
import { TimePeriodUpdateManyWithWhereWithoutDietInputSchema } from '../TimePeriodUpdateManyWithWhereWithoutDietInputSchema.js';
import { TimePeriodScalarWhereInputSchema } from '../TimePeriodScalarWhereInputSchema.js';
export const TimePeriodUncheckedUpdateManyWithoutDietNestedInputSchema: z.ZodType<Prisma.TimePeriodUncheckedUpdateManyWithoutDietNestedInput> = z.object({
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
export default TimePeriodUncheckedUpdateManyWithoutDietNestedInputSchema;