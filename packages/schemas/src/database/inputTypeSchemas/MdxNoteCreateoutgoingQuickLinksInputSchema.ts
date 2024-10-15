import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const MdxNoteCreateoutgoingQuickLinksInputSchema: z.ZodType<Prisma.MdxNoteCreateoutgoingQuickLinksInput> = z.object({
  set: z.string().array()
}).strict();
export default MdxNoteCreateoutgoingQuickLinksInputSchema;