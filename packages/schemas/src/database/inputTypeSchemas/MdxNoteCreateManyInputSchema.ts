import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreatecitationsListOrderInputSchema } from './MdxNoteCreatecitationsListOrderInputSchema';
import { MdxNoteCreateimportantValuesInputSchema } from './MdxNoteCreateimportantValuesInputSchema';
import { MdxNoteCreateoutgoingQuickLinksInputSchema } from './MdxNoteCreateoutgoingQuickLinksInputSchema';

export const MdxNoteCreateManyInputSchema: z.ZodType<Prisma.MdxNoteCreateManyInput> = z.object({
  id: z.number().int().optional(),
  isProtected: z.boolean().optional().nullable(),
  dietSummaryKey: z.string().optional().nullable(),
  title: z.string(),
  latexTitle: z.string().optional().nullable(),
  rootRelativePath: z.string(),
  noteType: z.string(),
  content: z.string(),
  formatted: z.string().optional().nullable(),
  summary: z.string().optional().nullable(),
  citationsListOrder: z.union([ z.lazy(() => MdxNoteCreatecitationsListOrderInputSchema),z.string().array() ]).optional(),
  importantValues: z.union([ z.lazy(() => MdxNoteCreateimportantValuesInputSchema),z.number().array() ]).optional(),
  imageSrc: z.string().optional().nullable(),
  href: z.string(),
  sequentialKey: z.string().optional().nullable(),
  sequentialIndex: z.number().optional().nullable(),
  floatImages: z.boolean().optional(),
  remoteUrl: z.string().optional().nullable(),
  trackRemote: z.boolean().optional(),
  outgoingQuickLinks: z.union([ z.lazy(() => MdxNoteCreateoutgoingQuickLinksInputSchema),z.string().array() ]).optional(),
  quickLink: z.string().optional().nullable(),
  bookmarked: z.boolean().optional(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();

export default MdxNoteCreateManyInputSchema;
