import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BibEntryScalarWhereInputSchema: z.ZodType<Prisma.BibEntryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BibEntryScalarWhereInputSchema),z.lazy(() => BibEntryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BibEntryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BibEntryScalarWhereInputSchema),z.lazy(() => BibEntryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  BibId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  OwnWork: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  ColleaguesWork: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  htmlCitation: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  PdfPath: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  annote: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  author: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  booktitle: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  chapter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  crossref: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  doi: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  edition: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  editor: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  howpublished: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  institution: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  journal: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  month: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  number: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  organization: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pages: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  publisher: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  school: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  series: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  volume: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  year: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  numpages: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  url: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  issue: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  issn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  abstract: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  urldate: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  keywords: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  copyright: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BibEntryScalarWhereInputSchema;
