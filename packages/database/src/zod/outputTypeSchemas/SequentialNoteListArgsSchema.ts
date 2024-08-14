import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SequentialNoteListSelectSchema } from '../inputTypeSchemas/SequentialNoteListSelectSchema';
import { SequentialNoteListIncludeSchema } from '../inputTypeSchemas/SequentialNoteListIncludeSchema';

export const SequentialNoteListArgsSchema: z.ZodType<Prisma.SequentialNoteListDefaultArgs> = z.object({
  select: z.lazy(() => SequentialNoteListSelectSchema).optional(),
  include: z.lazy(() => SequentialNoteListIncludeSchema).optional(),
}).strict();

export default SequentialNoteListArgsSchema;
