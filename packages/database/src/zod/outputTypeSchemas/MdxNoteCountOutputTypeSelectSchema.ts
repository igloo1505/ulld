import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const MdxNoteCountOutputTypeSelectSchema: z.ZodType<Prisma.MdxNoteCountOutputTypeSelect> = z.object({
  topics: z.boolean().optional(),
  subjects: z.boolean().optional(),
  tags: z.boolean().optional(),
  citations: z.boolean().optional(),
  ReadingList: z.boolean().optional(),
  equations: z.boolean().optional(),
  definitions: z.boolean().optional(),
  toDo: z.boolean().optional(),
}).strict();

export default MdxNoteCountOutputTypeSelectSchema;
