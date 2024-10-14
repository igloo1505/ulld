import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HealthReportWhereUniqueInputSchema } from './HealthReportWhereUniqueInputSchema';
import { HealthReportCreateWithoutCurrentDietInputSchema } from './HealthReportCreateWithoutCurrentDietInputSchema';
import { HealthReportUncheckedCreateWithoutCurrentDietInputSchema } from './HealthReportUncheckedCreateWithoutCurrentDietInputSchema';

export const HealthReportCreateOrConnectWithoutCurrentDietInputSchema: z.ZodType<Prisma.HealthReportCreateOrConnectWithoutCurrentDietInput> = z.object({
  where: z.lazy(() => HealthReportWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema),z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema) ]),
}).strict();

export default HealthReportCreateOrConnectWithoutCurrentDietInputSchema;
