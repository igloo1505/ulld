import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HealthReportScalarWhereInputSchema } from './HealthReportScalarWhereInputSchema';
import { HealthReportUpdateManyMutationInputSchema } from './HealthReportUpdateManyMutationInputSchema';
import { HealthReportUncheckedUpdateManyWithoutCurrentDietInputSchema } from './HealthReportUncheckedUpdateManyWithoutCurrentDietInputSchema';

export const HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema: z.ZodType<Prisma.HealthReportUpdateManyWithWhereWithoutCurrentDietInput> = z.object({
  where: z.lazy(() => HealthReportScalarWhereInputSchema),
  data: z.union([ z.lazy(() => HealthReportUpdateManyMutationInputSchema),z.lazy(() => HealthReportUncheckedUpdateManyWithoutCurrentDietInputSchema) ]),
}).strict();

export default HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema;
