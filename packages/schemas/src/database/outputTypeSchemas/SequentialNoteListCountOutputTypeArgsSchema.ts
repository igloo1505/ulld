import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SequentialNoteListCountOutputTypeSelectSchema } from '../SequentialNoteListCountOutputTypeSelectSchema.js';
export const SequentialNoteListCountOutputTypeArgsSchema: z.ZodType<Prisma.SequentialNoteListCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SequentialNoteListCountOutputTypeSelectSchema).nullish(),
}).strict();
export default SequentialNoteListCountOutputTypeSelectSchema;