import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const FeatureRequestWhereInputSchema: z.ZodType<Prisma.FeatureRequestWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FeatureRequestWhereInputSchema),z.lazy(() => FeatureRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FeatureRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FeatureRequestWhereInputSchema),z.lazy(() => FeatureRequestWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  category: z.lazy(() => StringNullableListFilterSchema).optional(),
  userBase: z.lazy(() => StringNullableListFilterSchema).optional(),
  receivedOn: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default FeatureRequestWhereInputSchema;
