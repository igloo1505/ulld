import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const MdxNoteCreateimportantValuesInputSchema: z.ZodType<Prisma.MdxNoteCreateimportantValuesInput> = z.object({
  set: z.number().array()
}).strict();
export default MdxNoteCreateimportantValuesInputSchema;