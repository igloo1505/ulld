import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SequentialNoteListCountOutputTypeSelectSchema } from './SequentialNoteListCountOutputTypeSelectSchema';

export const SequentialNoteListCountOutputTypeArgsSchema: z.ZodType<Prisma.SequentialNoteListCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SequentialNoteListCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SequentialNoteListCountOutputTypeSelectSchema;
