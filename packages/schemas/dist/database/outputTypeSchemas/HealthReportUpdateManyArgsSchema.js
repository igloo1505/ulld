import { z } from 'zod';
import { HealthReportUpdateManyMutationInputSchema } from '../inputTypeSchemas/HealthReportUpdateManyMutationInputSchema.js';
import { HealthReportUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/HealthReportUncheckedUpdateManyInputSchema.js';
import { HealthReportWhereInputSchema } from '../inputTypeSchemas/HealthReportWhereInputSchema.js';
export const HealthReportUpdateManyArgsSchema = z.object({
    data: z.union([HealthReportUpdateManyMutationInputSchema, HealthReportUncheckedUpdateManyInputSchema]),
    where: HealthReportWhereInputSchema.optional(),
}).strict();
export default HealthReportUpdateManyArgsSchema;
