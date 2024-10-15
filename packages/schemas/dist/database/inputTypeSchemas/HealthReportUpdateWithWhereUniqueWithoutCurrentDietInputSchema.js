import { z } from 'zod';
import { HealthReportWhereUniqueInputSchema } from './HealthReportWhereUniqueInputSchema.js';
import { HealthReportUpdateWithoutCurrentDietInputSchema } from './HealthReportUpdateWithoutCurrentDietInputSchema.js';
import { HealthReportUncheckedUpdateWithoutCurrentDietInputSchema } from './HealthReportUncheckedUpdateWithoutCurrentDietInputSchema.js';
export const HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema = z.object({
    where: z.lazy(() => HealthReportWhereUniqueInputSchema),
    data: z.union([z.lazy(() => HealthReportUpdateWithoutCurrentDietInputSchema), z.lazy(() => HealthReportUncheckedUpdateWithoutCurrentDietInputSchema)]),
}).strict();
export default HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema;
