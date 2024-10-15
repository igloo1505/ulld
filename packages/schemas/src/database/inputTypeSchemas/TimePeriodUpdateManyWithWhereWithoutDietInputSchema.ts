import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TimePeriodScalarWhereInputSchema } from './TimePeriodScalarWhereInputSchema.js';
import { TimePeriodUpdateManyMutationInputSchema } from './TimePeriodUpdateManyMutationInputSchema.js';
import { TimePeriodUncheckedUpdateManyWithoutDietInputSchema } from './TimePeriodUncheckedUpdateManyWithoutDietInputSchema.js';
export const TimePeriodUpdateManyWithWhereWithoutDietInputSchema: z.ZodType<Prisma.TimePeriodUpdateManyWithWhereWithoutDietInput> = z.object({
  where: z.lazy(() => TimePeriodScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TimePeriodUpdateManyMutationInputSchema),z.lazy(() => TimePeriodUncheckedUpdateManyWithoutDietInputSchema) ]),
}).strict();
export default TimePeriodUpdateManyWithWhereWithoutDietInputSchema;