import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HealthReportWhereInputSchema } from './HealthReportWhereInputSchema';

export const HealthReportListRelationFilterSchema: z.ZodType<Prisma.HealthReportListRelationFilter> = z.object({
  every: z.lazy(() => HealthReportWhereInputSchema).optional(),
  some: z.lazy(() => HealthReportWhereInputSchema).optional(),
  none: z.lazy(() => HealthReportWhereInputSchema).optional()
}).strict();

export default HealthReportListRelationFilterSchema;
