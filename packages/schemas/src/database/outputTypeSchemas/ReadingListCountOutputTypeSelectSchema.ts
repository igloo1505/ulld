import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const ReadingListCountOutputTypeSelectSchema: z.ZodType<Prisma.ReadingListCountOutputTypeSelect> = z.object({
  bibEntries: z.boolean().optional(),
  mdxNotes: z.boolean().optional(),
  ipynbNotes: z.boolean().optional(),
}).strict();
export default ReadingListCountOutputTypeSelectSchema;