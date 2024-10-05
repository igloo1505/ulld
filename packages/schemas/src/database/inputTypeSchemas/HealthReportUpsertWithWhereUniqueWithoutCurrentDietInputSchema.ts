import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HealthReportWhereUniqueInputSchema } from './HealthReportWhereUniqueInputSchema';
import { HealthReportUpdateWithoutCurrentDietInputSchema } from './HealthReportUpdateWithoutCurrentDietInputSchema';
import { HealthReportUncheckedUpdateWithoutCurrentDietInputSchema } from './HealthReportUncheckedUpdateWithoutCurrentDietInputSchema';
import { HealthReportCreateWithoutCurrentDietInputSchema } from './HealthReportCreateWithoutCurrentDietInputSchema';
import { HealthReportUncheckedCreateWithoutCurrentDietInputSchema } from './HealthReportUncheckedCreateWithoutCurrentDietInputSchema';

export const HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema: z.ZodType<Prisma.HealthReportUpsertWithWhereUniqueWithoutCurrentDietInput> = z.object({
  where: z.lazy(() => HealthReportWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => HealthReportUpdateWithoutCurrentDietInputSchema),z.lazy(() => HealthReportUncheckedUpdateWithoutCurrentDietInputSchema) ]),
  create: z.union([ z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema),z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema) ]),
}).strict();

export default HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema;
