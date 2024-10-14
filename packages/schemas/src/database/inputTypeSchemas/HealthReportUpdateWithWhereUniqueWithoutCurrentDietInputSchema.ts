import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HealthReportWhereUniqueInputSchema } from './HealthReportWhereUniqueInputSchema';
import { HealthReportUpdateWithoutCurrentDietInputSchema } from './HealthReportUpdateWithoutCurrentDietInputSchema';
import { HealthReportUncheckedUpdateWithoutCurrentDietInputSchema } from './HealthReportUncheckedUpdateWithoutCurrentDietInputSchema';

export const HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema: z.ZodType<Prisma.HealthReportUpdateWithWhereUniqueWithoutCurrentDietInput> = z.object({
  where: z.lazy(() => HealthReportWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => HealthReportUpdateWithoutCurrentDietInputSchema),z.lazy(() => HealthReportUncheckedUpdateWithoutCurrentDietInputSchema) ]),
}).strict();

export default HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema;
