import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const MdxNoteCreatecitationsListOrderInputSchema: z.ZodType<Prisma.MdxNoteCreatecitationsListOrderInput> = z.object({
  set: z.string().array()
}).strict();
export default MdxNoteCreatecitationsListOrderInputSchema;