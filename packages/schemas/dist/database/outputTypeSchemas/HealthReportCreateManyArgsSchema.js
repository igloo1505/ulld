import { z } from 'zod';
import { HealthReportCreateManyInputSchema } from '../inputTypeSchemas/HealthReportCreateManyInputSchema.js';
export const HealthReportCreateManyArgsSchema = z.object({
    data: z.union([HealthReportCreateManyInputSchema, HealthReportCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default HealthReportCreateManyArgsSchema;
