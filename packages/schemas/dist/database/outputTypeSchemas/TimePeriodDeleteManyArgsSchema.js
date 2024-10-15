import { z } from 'zod';
import { TimePeriodWhereInputSchema } from '../inputTypeSchemas/TimePeriodWhereInputSchema.js';
export const TimePeriodDeleteManyArgsSchema = z.object({
    where: TimePeriodWhereInputSchema.optional(),
}).strict();
export default TimePeriodDeleteManyArgsSchema;
