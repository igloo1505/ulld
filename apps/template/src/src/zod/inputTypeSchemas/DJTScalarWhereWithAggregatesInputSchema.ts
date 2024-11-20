import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { BytesWithAggregatesFilterSchema } from './BytesWithAggregatesFilterSchema';

export const DJTScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DJTScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DJTScalarWhereWithAggregatesInputSchema),z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DJTScalarWhereWithAggregatesInputSchema),z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  pluginName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  modelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  utilityStringField: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  utilityNumberField: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  utilityDateField: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  utilityDateFieldTwo: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  data: z.union([ z.lazy(() => BytesWithAggregatesFilterSchema),z.instanceof(Buffer) ]).optional(),
}).strict();

export default DJTScalarWhereWithAggregatesInputSchema;
