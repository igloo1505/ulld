import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFilterSchema } from '../IntFilterSchema.js';
import { BoolNullableFilterSchema } from '../BoolNullableFilterSchema.js';
import { StringNullableFilterSchema } from '../StringNullableFilterSchema.js';
import { StringFilterSchema } from '../StringFilterSchema.js';
import { StringNullableListFilterSchema } from '../StringNullableListFilterSchema.js';
import { FloatNullableListFilterSchema } from '../FloatNullableListFilterSchema.js';
import { FloatNullableFilterSchema } from '../FloatNullableFilterSchema.js';
import { BoolFilterSchema } from '../BoolFilterSchema.js';
import { DateTimeFilterSchema } from '../DateTimeFilterSchema.js';
export const MdxNoteScalarWhereInputSchema: z.ZodType<Prisma.MdxNoteScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MdxNoteScalarWhereInputSchema),z.lazy(() => MdxNoteScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MdxNoteScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MdxNoteScalarWhereInputSchema),z.lazy(() => MdxNoteScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  isProtected: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  dietSummaryKey: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  latexTitle: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rootRelativePath: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  noteType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  formatted: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  summary: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  citationsListOrder: z.lazy(() => StringNullableListFilterSchema).optional(),
  importantValues: z.lazy(() => FloatNullableListFilterSchema).optional(),
  imageSrc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  href: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sequentialKey: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sequentialIndex: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  floatImages: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  remoteUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  trackRemote: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  outgoingQuickLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  quickLink: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  bookmarked: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  firstSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();
export default MdxNoteScalarWhereInputSchema;