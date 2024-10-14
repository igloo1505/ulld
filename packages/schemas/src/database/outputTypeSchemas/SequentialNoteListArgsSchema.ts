import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SequentialNoteListSelectSchema } from '../inputTypeSchemas/SequentialNoteListSelectSchema.js';
import { SequentialNoteListIncludeSchema } from '../inputTypeSchemas/SequentialNoteListIncludeSchema.js';
export const SequentialNoteListArgsSchema: z.ZodType<Prisma.SequentialNoteListDefaultArgs> = z.object({
  select: z.lazy(() => SequentialNoteListSelectSchema).optional(),
  include: z.lazy(() => SequentialNoteListIncludeSchema).optional(),
}).strict();
export default SequentialNoteListArgsSchema;