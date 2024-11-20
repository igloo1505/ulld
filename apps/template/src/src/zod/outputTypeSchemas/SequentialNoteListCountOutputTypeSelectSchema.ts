import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const SequentialNoteListCountOutputTypeSelectSchema: z.ZodType<Prisma.SequentialNoteListCountOutputTypeSelect> = z.object({
  MdxNote: z.boolean().optional(),
  Ipynb: z.boolean().optional(),
}).strict();

export default SequentialNoteListCountOutputTypeSelectSchema;
