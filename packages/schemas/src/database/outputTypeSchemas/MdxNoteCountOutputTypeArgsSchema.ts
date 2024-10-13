import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { MdxNoteCountOutputTypeSelectSchema } from '../MdxNoteCountOutputTypeSelectSchema.js';
export const MdxNoteCountOutputTypeArgsSchema: z.ZodType<Prisma.MdxNoteCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MdxNoteCountOutputTypeSelectSchema).nullish(),
}).strict();
export default MdxNoteCountOutputTypeSelectSchema;