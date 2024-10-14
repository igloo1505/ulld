import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TimePeriodCreateManyDietInputSchema } from './TimePeriodCreateManyDietInputSchema';

export const TimePeriodCreateManyDietInputEnvelopeSchema: z.ZodType<Prisma.TimePeriodCreateManyDietInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TimePeriodCreateManyDietInputSchema),z.lazy(() => TimePeriodCreateManyDietInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TimePeriodCreateManyDietInputEnvelopeSchema;
