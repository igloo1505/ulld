import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MdxNoteCountOutputTypeSelectSchema } from './MdxNoteCountOutputTypeSelectSchema';

export const MdxNoteCountOutputTypeArgsSchema: z.ZodType<Prisma.MdxNoteCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MdxNoteCountOutputTypeSelectSchema).nullish(),
}).strict();

export default MdxNoteCountOutputTypeSelectSchema;
