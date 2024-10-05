import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadingListSelectSchema } from '../inputTypeSchemas/ReadingListSelectSchema';
import { ReadingListIncludeSchema } from '../inputTypeSchemas/ReadingListIncludeSchema';

export const ReadingListArgsSchema: z.ZodType<Prisma.ReadingListDefaultArgs> = z.object({
  select: z.lazy(() => ReadingListSelectSchema).optional(),
  include: z.lazy(() => ReadingListIncludeSchema).optional(),
}).strict();

export default ReadingListArgsSchema;
