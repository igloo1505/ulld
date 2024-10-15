import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const HealthReportOrderByRelationAggregateInputSchema: z.ZodType<Prisma.HealthReportOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default HealthReportOrderByRelationAggregateInputSchema;