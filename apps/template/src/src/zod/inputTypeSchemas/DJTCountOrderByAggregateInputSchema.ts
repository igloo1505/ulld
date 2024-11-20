import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DJTCountOrderByAggregateInputSchema: z.ZodType<Prisma.DJTCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pluginName: z.lazy(() => SortOrderSchema).optional(),
  modelId: z.lazy(() => SortOrderSchema).optional(),
  utilityStringField: z.lazy(() => SortOrderSchema).optional(),
  utilityNumberField: z.lazy(() => SortOrderSchema).optional(),
  utilityDateField: z.lazy(() => SortOrderSchema).optional(),
  utilityDateFieldTwo: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DJTCountOrderByAggregateInputSchema;
