import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DJTWhereInputSchema } from './DJTWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { BytesFilterSchema } from './BytesFilterSchema';

export const DJTWhereUniqueInputSchema: z.ZodType<Prisma.DJTWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => DJTWhereInputSchema),z.lazy(() => DJTWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DJTWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DJTWhereInputSchema),z.lazy(() => DJTWhereInputSchema).array() ]).optional(),
  pluginName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  modelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  utilityStringField: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  utilityNumberField: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  utilityDateField: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  utilityDateFieldTwo: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  data: z.union([ z.lazy(() => BytesFilterSchema),z.instanceof(Buffer) ]).optional(),
}).strict());

export default DJTWhereUniqueInputSchema;
