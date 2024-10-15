import { z } from 'zod';
import { TimePeriodSelectSchema } from '../inputTypeSchemas/TimePeriodSelectSchema.js';
import { TimePeriodIncludeSchema } from '../inputTypeSchemas/TimePeriodIncludeSchema.js';
export const TimePeriodArgsSchema = z.object({
    select: z.lazy(() => TimePeriodSelectSchema).optional(),
    include: z.lazy(() => TimePeriodIncludeSchema).optional(),
}).strict();
export default TimePeriodArgsSchema;
