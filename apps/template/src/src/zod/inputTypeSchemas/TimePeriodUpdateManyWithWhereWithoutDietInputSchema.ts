import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TimePeriodScalarWhereInputSchema } from './TimePeriodScalarWhereInputSchema';
import { TimePeriodUpdateManyMutationInputSchema } from './TimePeriodUpdateManyMutationInputSchema';
import { TimePeriodUncheckedUpdateManyWithoutDietInputSchema } from './TimePeriodUncheckedUpdateManyWithoutDietInputSchema';

export const TimePeriodUpdateManyWithWhereWithoutDietInputSchema: z.ZodType<Prisma.TimePeriodUpdateManyWithWhereWithoutDietInput> = z.object({
  where: z.lazy(() => TimePeriodScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TimePeriodUpdateManyMutationInputSchema),z.lazy(() => TimePeriodUncheckedUpdateManyWithoutDietInputSchema) ]),
}).strict();

export default TimePeriodUpdateManyWithWhereWithoutDietInputSchema;
