import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { HealthReportCreateManyCurrentDietInputSchema } from '../HealthReportCreateManyCurrentDietInputSchema.js';
export const HealthReportCreateManyCurrentDietInputEnvelopeSchema: z.ZodType<Prisma.HealthReportCreateManyCurrentDietInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => HealthReportCreateManyCurrentDietInputSchema),z.lazy(() => HealthReportCreateManyCurrentDietInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();
export default HealthReportCreateManyCurrentDietInputEnvelopeSchema;