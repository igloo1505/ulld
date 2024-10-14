import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibEntryCountOutputTypeSelectSchema } from './BibEntryCountOutputTypeSelectSchema';

export const BibEntryCountOutputTypeArgsSchema: z.ZodType<Prisma.BibEntryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BibEntryCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BibEntryCountOutputTypeSelectSchema;
