import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BibEntryCountOutputTypeSelectSchema: z.ZodType<Prisma.BibEntryCountOutputTypeSelect> = z.object({
  citationGroups: z.boolean().optional(),
  tags: z.boolean().optional(),
  topics: z.boolean().optional(),
  subjects: z.boolean().optional(),
  MdxNotes: z.boolean().optional(),
  ipynbNotes: z.boolean().optional(),
  readingList: z.boolean().optional(),
}).strict();

export default BibEntryCountOutputTypeSelectSchema;
