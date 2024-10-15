import { z } from 'zod';
import { HealthReportWhereInputSchema } from '../inputTypeSchemas/HealthReportWhereInputSchema.js';
export const HealthReportDeleteManyArgsSchema = z.object({
    where: HealthReportWhereInputSchema.optional(),
}).strict();
export default HealthReportDeleteManyArgsSchema;
