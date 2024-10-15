import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema.js';
import { StringFilterSchema } from './StringFilterSchema.js';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema.js';
import { FloatNullableListFilterSchema } from './FloatNullableListFilterSchema.js';
import { BytesFilterSchema } from './BytesFilterSchema.js';
import { IntNullableFilterSchema } from './IntNullableFilterSchema.js';
import { BoolFilterSchema } from './BoolFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema.js';
import { TopicListRelationFilterSchema } from './TopicListRelationFilterSchema.js';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema.js';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema.js';
import { SequentialNoteListNullableRelationFilterSchema } from './SequentialNoteListNullableRelationFilterSchema.js';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema.js';
import { ReadingListListRelationFilterSchema } from './ReadingListListRelationFilterSchema.js';
export const IpynbWhereInputSchema: z.ZodType<Prisma.IpynbWhereInput> = z.object({
  AND: z.union([ z.lazy(() => IpynbWhereInputSchema),z.lazy(() => IpynbWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IpynbWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IpynbWhereInputSchema),z.lazy(() => IpynbWhereInputSchema).array() ]).optional(),
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
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  citations: z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  sequentialList: z.union([ z.lazy(() => SequentialNoteListNullableRelationFilterSchema),z.lazy(() => SequentialNoteListWhereInputSchema) ]).optional().nullable(),
  readingList: z.lazy(() => ReadingListListRelationFilterSchema).optional()
}).strict();
export default IpynbWhereInputSchema;