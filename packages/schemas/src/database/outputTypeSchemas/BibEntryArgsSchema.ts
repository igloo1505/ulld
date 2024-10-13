import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BibEntrySelectSchema.js
..//inputTypeSchemas/BibEntryIncludeSchema.js
export const BibEntryArgsSchema: z.ZodType<Prisma.BibEntryDefaultArgs> = z.object({
  select: z.lazy(() => BibEntrySelectSchema).optional(),
  include: z.lazy(() => BibEntryIncludeSchema).optional(),
}).strict();
export default BibEntryArgsSchema;