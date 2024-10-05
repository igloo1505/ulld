import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HealthReportCreateWithoutCurrentDietInputSchema } from './HealthReportCreateWithoutCurrentDietInputSchema';
import { HealthReportUncheckedCreateWithoutCurrentDietInputSchema } from './HealthReportUncheckedCreateWithoutCurrentDietInputSchema';
import { HealthReportCreateOrConnectWithoutCurrentDietInputSchema } from './HealthReportCreateOrConnectWithoutCurrentDietInputSchema';
import { HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema } from './HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema';
import { HealthReportCreateManyCurrentDietInputEnvelopeSchema } from './HealthReportCreateManyCurrentDietInputEnvelopeSchema';
import { HealthReportWhereUniqueInputSchema } from './HealthReportWhereUniqueInputSchema';
import { HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema } from './HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema';
import { HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema } from './HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema';
import { HealthReportScalarWhereInputSchema } from './HealthReportScalarWhereInputSchema';

export const HealthReportUpdateManyWithoutCurrentDietNestedInputSchema: z.ZodType<Prisma.HealthReportUpdateManyWithoutCurrentDietNestedInput> = z.object({
  create: z.union([ z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema),z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema).array(),z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema),z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HealthReportCreateOrConnectWithoutCurrentDietInputSchema),z.lazy(() => HealthReportCreateOrConnectWithoutCurrentDietInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema),z.lazy(() => HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HealthReportCreateManyCurrentDietInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => HealthReportWhereUniqueInputSchema),z.lazy(() => HealthReportWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HealthReportWhereUniqueInputSchema),z.lazy(() => HealthReportWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HealthReportWhereUniqueInputSchema),z.lazy(() => HealthReportWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HealthReportWhereUniqueInputSchema),z.lazy(() => HealthReportWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema),z.lazy(() => HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema),z.lazy(() => HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HealthReportScalarWhereInputSchema),z.lazy(() => HealthReportScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default HealthReportUpdateManyWithoutCurrentDietNestedInputSchema;
