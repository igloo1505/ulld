import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const BusinessContactWhereInputSchema: z.ZodType<Prisma.BusinessContactWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BusinessContactWhereInputSchema),z.lazy(() => BusinessContactWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BusinessContactWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BusinessContactWhereInputSchema),z.lazy(() => BusinessContactWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  companyName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contactName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contactPreference: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  phone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  purpose: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default BusinessContactWhereInputSchema;
