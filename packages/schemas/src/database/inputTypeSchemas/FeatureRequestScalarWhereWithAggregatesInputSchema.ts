import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const FeatureRequestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FeatureRequestScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => FeatureRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  category: z.lazy(() => StringNullableListFilterSchema).optional(),
  userBase: z.lazy(() => StringNullableListFilterSchema).optional(),
  receivedOn: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default FeatureRequestScalarWhereWithAggregatesInputSchema;
