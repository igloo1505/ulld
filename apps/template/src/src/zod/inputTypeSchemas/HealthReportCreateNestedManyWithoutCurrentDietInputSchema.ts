import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HealthReportCreateWithoutCurrentDietInputSchema } from './HealthReportCreateWithoutCurrentDietInputSchema';
import { HealthReportUncheckedCreateWithoutCurrentDietInputSchema } from './HealthReportUncheckedCreateWithoutCurrentDietInputSchema';
import { HealthReportCreateOrConnectWithoutCurrentDietInputSchema } from './HealthReportCreateOrConnectWithoutCurrentDietInputSchema';
import { HealthReportCreateManyCurrentDietInputEnvelopeSchema } from './HealthReportCreateManyCurrentDietInputEnvelopeSchema';
import { HealthReportWhereUniqueInputSchema } from './HealthReportWhereUniqueInputSchema';

export const HealthReportCreateNestedManyWithoutCurrentDietInputSchema: z.ZodType<Prisma.HealthReportCreateNestedManyWithoutCurrentDietInput> = z.object({
  create: z.union([ z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema),z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema).array(),z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema),z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HealthReportCreateOrConnectWithoutCurrentDietInputSchema),z.lazy(() => HealthReportCreateOrConnectWithoutCurrentDietInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HealthReportCreateManyCurrentDietInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => HealthReportWhereUniqueInputSchema),z.lazy(() => HealthReportWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default HealthReportCreateNestedManyWithoutCurrentDietInputSchema;
