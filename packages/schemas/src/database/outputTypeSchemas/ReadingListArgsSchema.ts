import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ReadingListSelectSchema.js
..//inputTypeSchemas/ReadingListIncludeSchema.js
export const ReadingListArgsSchema: z.ZodType<Prisma.ReadingListDefaultArgs> = z.object({
  select: z.lazy(() => ReadingListSelectSchema).optional(),
  include: z.lazy(() => ReadingListIncludeSchema).optional(),
}).strict();
export default ReadingListArgsSchema;