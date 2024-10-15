import { z } from 'zod';
import { HealthReportScalarWhereInputSchema } from './HealthReportScalarWhereInputSchema.js';
import { HealthReportUpdateManyMutationInputSchema } from './HealthReportUpdateManyMutationInputSchema.js';
import { HealthReportUncheckedUpdateManyWithoutCurrentDietInputSchema } from './HealthReportUncheckedUpdateManyWithoutCurrentDietInputSchema.js';
export const HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema = z.object({
    where: z.lazy(() => HealthReportScalarWhereInputSchema),
    data: z.union([z.lazy(() => HealthReportUpdateManyMutationInputSchema), z.lazy(() => HealthReportUncheckedUpdateManyWithoutCurrentDietInputSchema)]),
}).strict();
export default HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema;
