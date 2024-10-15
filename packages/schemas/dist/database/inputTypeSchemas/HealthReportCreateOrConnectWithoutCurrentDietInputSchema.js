import { z } from 'zod';
import { HealthReportWhereUniqueInputSchema } from './HealthReportWhereUniqueInputSchema.js';
import { HealthReportCreateWithoutCurrentDietInputSchema } from './HealthReportCreateWithoutCurrentDietInputSchema.js';
import { HealthReportUncheckedCreateWithoutCurrentDietInputSchema } from './HealthReportUncheckedCreateWithoutCurrentDietInputSchema.js';
export const HealthReportCreateOrConnectWithoutCurrentDietInputSchema = z.object({
    where: z.lazy(() => HealthReportWhereUniqueInputSchema),
    create: z.union([z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema), z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema)]),
}).strict();
export default HealthReportCreateOrConnectWithoutCurrentDietInputSchema;
