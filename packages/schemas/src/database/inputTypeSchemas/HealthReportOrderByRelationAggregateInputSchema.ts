import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const HealthReportOrderByRelationAggregateInputSchema: z.ZodType<Prisma.HealthReportOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default HealthReportOrderByRelationAggregateInputSchema;
