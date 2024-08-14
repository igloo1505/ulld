import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BibEntryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BibEntryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  BibId: z.lazy(() => SortOrderSchema).optional(),
  OwnWork: z.lazy(() => SortOrderSchema).optional(),
  ColleaguesWork: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  htmlCitation: z.lazy(() => SortOrderSchema).optional(),
  PdfPath: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  annote: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  booktitle: z.lazy(() => SortOrderSchema).optional(),
  chapter: z.lazy(() => SortOrderSchema).optional(),
  crossref: z.lazy(() => SortOrderSchema).optional(),
  doi: z.lazy(() => SortOrderSchema).optional(),
  edition: z.lazy(() => SortOrderSchema).optional(),
  editor: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  howpublished: z.lazy(() => SortOrderSchema).optional(),
  institution: z.lazy(() => SortOrderSchema).optional(),
  journal: z.lazy(() => SortOrderSchema).optional(),
  month: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  organization: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  school: z.lazy(() => SortOrderSchema).optional(),
  series: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  volume: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  numpages: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  issue: z.lazy(() => SortOrderSchema).optional(),
  issn: z.lazy(() => SortOrderSchema).optional(),
  abstract: z.lazy(() => SortOrderSchema).optional(),
  urldate: z.lazy(() => SortOrderSchema).optional(),
  keywords: z.lazy(() => SortOrderSchema).optional(),
  copyright: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BibEntryMaxOrderByAggregateInputSchema;
