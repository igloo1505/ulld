import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const MdxNoteCreateimportantValuesInputSchema: z.ZodType<Prisma.MdxNoteCreateimportantValuesInput> = z.object({
  set: z.number().array()
}).strict();

export default MdxNoteCreateimportantValuesInputSchema;
