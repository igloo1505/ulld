import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ReadingListCountOutputTypeSelectSchema } from './ReadingListCountOutputTypeSelectSchema.js';
export const ReadingListCountOutputTypeArgsSchema: z.ZodType<Prisma.ReadingListCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ReadingListCountOutputTypeSelectSchema).nullish(),
}).strict();
export default ReadingListCountOutputTypeSelectSchema;