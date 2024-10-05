import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const MdxNoteCreatecitationsListOrderInputSchema: z.ZodType<Prisma.MdxNoteCreatecitationsListOrderInput> = z.object({
  set: z.string().array()
}).strict();

export default MdxNoteCreatecitationsListOrderInputSchema;
