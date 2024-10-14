import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HealthReportCreateManyCurrentDietInputSchema } from './HealthReportCreateManyCurrentDietInputSchema';

export const HealthReportCreateManyCurrentDietInputEnvelopeSchema: z.ZodType<Prisma.HealthReportCreateManyCurrentDietInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => HealthReportCreateManyCurrentDietInputSchema),z.lazy(() => HealthReportCreateManyCurrentDietInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default HealthReportCreateManyCurrentDietInputEnvelopeSchema;
