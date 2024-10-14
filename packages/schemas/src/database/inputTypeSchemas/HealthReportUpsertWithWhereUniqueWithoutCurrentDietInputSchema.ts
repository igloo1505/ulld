import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { HealthReportWhereUniqueInputSchema } from './HealthReportWhereUniqueInputSchema.js';
import { HealthReportUpdateWithoutCurrentDietInputSchema } from './HealthReportUpdateWithoutCurrentDietInputSchema.js';
import { HealthReportUncheckedUpdateWithoutCurrentDietInputSchema } from './HealthReportUncheckedUpdateWithoutCurrentDietInputSchema.js';
import { HealthReportCreateWithoutCurrentDietInputSchema } from './HealthReportCreateWithoutCurrentDietInputSchema.js';
import { HealthReportUncheckedCreateWithoutCurrentDietInputSchema } from './HealthReportUncheckedCreateWithoutCurrentDietInputSchema.js';
export const HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema: z.ZodType<Prisma.HealthReportUpsertWithWhereUniqueWithoutCurrentDietInput> = z.object({
  where: z.lazy(() => HealthReportWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => HealthReportUpdateWithoutCurrentDietInputSchema),z.lazy(() => HealthReportUncheckedUpdateWithoutCurrentDietInputSchema) ]),
  create: z.union([ z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema),z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema) ]),
}).strict();
export default HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema;