import { z } from 'zod';
import { HealthReportWhereInputSchema } from './HealthReportWhereInputSchema.js';
export const HealthReportListRelationFilterSchema = z.object({
    every: z.lazy(() => HealthReportWhereInputSchema).optional(),
    some: z.lazy(() => HealthReportWhereInputSchema).optional(),
    none: z.lazy(() => HealthReportWhereInputSchema).optional()
}).strict();
export default HealthReportListRelationFilterSchema;
