import { z } from 'zod';
import { TimePeriodWhereUniqueInputSchema } from './TimePeriodWhereUniqueInputSchema.js';
import { TimePeriodUpdateWithoutDietInputSchema } from './TimePeriodUpdateWithoutDietInputSchema.js';
import { TimePeriodUncheckedUpdateWithoutDietInputSchema } from './TimePeriodUncheckedUpdateWithoutDietInputSchema.js';
export const TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema = z.object({
    where: z.lazy(() => TimePeriodWhereUniqueInputSchema),
    data: z.union([z.lazy(() => TimePeriodUpdateWithoutDietInputSchema), z.lazy(() => TimePeriodUncheckedUpdateWithoutDietInputSchema)]),
}).strict();
export default TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema;
