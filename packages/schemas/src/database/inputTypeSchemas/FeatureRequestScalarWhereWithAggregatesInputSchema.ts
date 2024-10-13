import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from '../IntWithAggregatesFilterSchema.js';
import { StringWithAggregatesFilterSchema } from '../StringWithAggregatesFilterSchema.js';
import { StringNullableListFilterSchema } from '../StringNullableListFilterSchema.js';
import { DateTimeWithAggregatesFilterSchema } from '../DateTimeWithAggregatesFilterSchema.js';
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