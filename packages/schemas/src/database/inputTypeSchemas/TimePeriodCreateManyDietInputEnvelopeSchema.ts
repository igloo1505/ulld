import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TimePeriodCreateManyDietInputSchema } from './TimePeriodCreateManyDietInputSchema.js';
export const TimePeriodCreateManyDietInputEnvelopeSchema: z.ZodType<Prisma.TimePeriodCreateManyDietInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TimePeriodCreateManyDietInputSchema),z.lazy(() => TimePeriodCreateManyDietInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();
export default TimePeriodCreateManyDietInputEnvelopeSchema;