import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IpynbWhereInputSchema } from './IpynbWhereInputSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { FloatNullableListFilterSchema } from './FloatNullableListFilterSchema';
import { BytesFilterSchema } from './BytesFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema';
import { SequentialNoteListNullableRelationFilterSchema } from './SequentialNoteListNullableRelationFilterSchema';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema';
import { ReadingListListRelationFilterSchema } from './ReadingListListRelationFilterSchema';

export const IpynbWhereUniqueInputSchema: z.ZodType<Prisma.IpynbWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    rootRelativePath: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    rootRelativePath: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  rootRelativePath: z.string().optional(),
  AND: z.union([ z.lazy(() => IpynbWhereInputSchema),z.lazy(() => IpynbWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IpynbWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IpynbWhereInputSchema),z.lazy(() => IpynbWhereInputSchema).array() ]).optional(),
  isProtected: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  latexTitle: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  citationsListOrder: z.lazy(() => StringNullableListFilterSchema).optional(),
  importantValues: z.lazy(() => FloatNullableListFilterSchema).optional(),
  href: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  outgoingQuickLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  raw: z.union([ z.lazy(() => BytesFilterSchema),z.instanceof(Buffer) ]).optional(),
  sequentialKey: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sequentialIndex: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  bookmarked: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  firstSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastSync: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  citations: z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  sequentialList: z.union([ z.lazy(() => SequentialNoteListNullableRelationFilterSchema),z.lazy(() => SequentialNoteListWhereInputSchema) ]).optional().nullable(),
  readingList: z.lazy(() => ReadingListListRelationFilterSchema).optional()
}).strict());

export default IpynbWhereUniqueInputSchema;
