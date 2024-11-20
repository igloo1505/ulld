import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadingListCountOutputTypeSelectSchema } from './ReadingListCountOutputTypeSelectSchema';

export const ReadingListCountOutputTypeArgsSchema: z.ZodType<Prisma.ReadingListCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ReadingListCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ReadingListCountOutputTypeSelectSchema;
