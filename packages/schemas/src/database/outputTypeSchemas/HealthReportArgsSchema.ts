import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/HealthReportSelectSchema.js
..//inputTypeSchemas/HealthReportIncludeSchema.js
export const HealthReportArgsSchema: z.ZodType<Prisma.HealthReportDefaultArgs> = z.object({
  select: z.lazy(() => HealthReportSelectSchema).optional(),
  include: z.lazy(() => HealthReportIncludeSchema).optional(),
}).strict();
export default HealthReportArgsSchema;