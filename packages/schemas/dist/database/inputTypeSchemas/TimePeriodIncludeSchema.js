import { z } from 'zod';
import { DietArgsSchema } from "../outputTypeSchemas/DietArgsSchema";
export const TimePeriodIncludeSchema = z.object({
    Diet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional(),
}).strict();
export default TimePeriodIncludeSchema;
