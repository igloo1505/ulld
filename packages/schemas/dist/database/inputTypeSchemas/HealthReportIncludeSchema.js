import { z } from 'zod';
import { DietArgsSchema } from "../outputTypeSchemas/DietArgsSchema";
export const HealthReportIncludeSchema = z.object({
    currentDiet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional(),
}).strict();
export default HealthReportIncludeSchema;
