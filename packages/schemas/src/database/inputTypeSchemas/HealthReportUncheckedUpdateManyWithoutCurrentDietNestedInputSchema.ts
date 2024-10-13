import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { HealthReportCreateWithoutCurrentDietInputSchema } from '../HealthReportCreateWithoutCurrentDietInputSchema.js';
import { HealthReportUncheckedCreateWithoutCurrentDietInputSchema } from '../HealthReportUncheckedCreateWithoutCurrentDietInputSchema.js';
import { HealthReportCreateOrConnectWithoutCurrentDietInputSchema } from '../HealthReportCreateOrConnectWithoutCurrentDietInputSchema.js';
import { HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema } from '../HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema.js';
import { HealthReportCreateManyCurrentDietInputEnvelopeSchema } from '../HealthReportCreateManyCurrentDietInputEnvelopeSchema.js';
import { HealthReportWhereUniqueInputSchema } from '../HealthReportWhereUniqueInputSchema.js';
import { HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema } from '../HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema.js';
import { HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema } from '../HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema.js';
import { HealthReportScalarWhereInputSchema } from '../HealthReportScalarWhereInputSchema.js';
export const HealthReportUncheckedUpdateManyWithoutCurrentDietNestedInputSchema: z.ZodType<Prisma.HealthReportUncheckedUpdateManyWithoutCurrentDietNestedInput> = z.object({
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
export default HealthReportUncheckedUpdateManyWithoutCurrentDietNestedInputSchema;