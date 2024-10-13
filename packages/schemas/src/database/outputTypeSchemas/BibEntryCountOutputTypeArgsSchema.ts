import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BibEntryCountOutputTypeSelectSchema } from '../BibEntryCountOutputTypeSelectSchema.js';
export const BibEntryCountOutputTypeArgsSchema: z.ZodType<Prisma.BibEntryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BibEntryCountOutputTypeSelectSchema).nullish(),
}).strict();
export default BibEntryCountOutputTypeSelectSchema;