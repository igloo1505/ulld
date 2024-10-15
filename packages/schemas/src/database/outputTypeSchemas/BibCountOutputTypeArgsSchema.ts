import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BibCountOutputTypeSelectSchema } from './BibCountOutputTypeSelectSchema.js';
export const BibCountOutputTypeArgsSchema: z.ZodType<Prisma.BibCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BibCountOutputTypeSelectSchema).nullish(),
}).strict();
export default BibCountOutputTypeSelectSchema;