import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MdxNoteMinOrderByAggregateInputSchema: z.ZodType<Prisma.MdxNoteMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  isProtected: z.lazy(() => SortOrderSchema).optional(),
  dietSummaryKey: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  latexTitle: z.lazy(() => SortOrderSchema).optional(),
  rootRelativePath: z.lazy(() => SortOrderSchema).optional(),
  noteType: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  formatted: z.lazy(() => SortOrderSchema).optional(),
  summary: z.lazy(() => SortOrderSchema).optional(),
  imageSrc: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  sequentialKey: z.lazy(() => SortOrderSchema).optional(),
  sequentialIndex: z.lazy(() => SortOrderSchema).optional(),
  floatImages: z.lazy(() => SortOrderSchema).optional(),
  remoteUrl: z.lazy(() => SortOrderSchema).optional(),
  trackRemote: z.lazy(() => SortOrderSchema).optional(),
  quickLink: z.lazy(() => SortOrderSchema).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MdxNoteMinOrderByAggregateInputSchema;
