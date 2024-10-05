import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { FloatNullableListFilterSchema } from './FloatNullableListFilterSchema';
import { BytesFilterSchema } from './BytesFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const IpynbScalarWhereInputSchema: z.ZodType<Prisma.IpynbScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => IpynbScalarWhereInputSchema),z.lazy(() => IpynbScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IpynbScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IpynbScalarWhereInputSchema),z.lazy(() => IpynbScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rootRelativePath: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isProtected: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  latexTitle: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  citationsListOrder: z.lazy(() => StringNullableListFilterSchema).optional(),
  importantValues: z.lazy(() => FloatNullableListFilterSchema).optional(),
  href: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  outgoingQuickLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  raw: z.union([ z.lazy(() => BytesFilterSchema),z.instanceof(Buffer) ]).optional(),
  sequentialKey: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sequentialIndex: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  bookmarked: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  firstSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default IpynbScalarWhereInputSchema;
