import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ReadingListSelectSchema } from '../inputTypeSchemas/ReadingListSelectSchema.js';
import { ReadingListIncludeSchema } from '../inputTypeSchemas/ReadingListIncludeSchema.js';
export const ReadingListArgsSchema: z.ZodType<Prisma.ReadingListDefaultArgs> = z.object({
  select: z.lazy(() => ReadingListSelectSchema).optional(),
  include: z.lazy(() => ReadingListIncludeSchema).optional(),
}).strict();
export default ReadingListArgsSchema;