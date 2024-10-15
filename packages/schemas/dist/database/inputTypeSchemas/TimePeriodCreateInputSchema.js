import { z } from 'zod';
import { DietCreateNestedOneWithoutPeriodsFollowedInputSchema } from './DietCreateNestedOneWithoutPeriodsFollowedInputSchema.js';
export const TimePeriodCreateInputSchema = z.object({
    start: z.coerce.date().optional(),
    end: z.coerce.date().optional().nullable(),
    Diet: z.lazy(() => DietCreateNestedOneWithoutPeriodsFollowedInputSchema).optional()
}).strict();
export default TimePeriodCreateInputSchema;
