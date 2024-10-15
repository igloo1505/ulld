import { z } from 'zod';
import { HealthReportSelectSchema } from '../inputTypeSchemas/HealthReportSelectSchema.js';
import { HealthReportIncludeSchema } from '../inputTypeSchemas/HealthReportIncludeSchema.js';
export const HealthReportArgsSchema = z.object({
    select: z.lazy(() => HealthReportSelectSchema).optional(),
    include: z.lazy(() => HealthReportIncludeSchema).optional(),
}).strict();
export default HealthReportArgsSchema;
