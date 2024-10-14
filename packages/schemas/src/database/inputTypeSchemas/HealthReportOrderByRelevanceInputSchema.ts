import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HealthReportOrderByRelevanceFieldEnumSchema } from './HealthReportOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const HealthReportOrderByRelevanceInputSchema: z.ZodType<Prisma.HealthReportOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => HealthReportOrderByRelevanceFieldEnumSchema),z.lazy(() => HealthReportOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default HealthReportOrderByRelevanceInputSchema;
