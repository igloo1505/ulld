import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BibSelectSchema } from '../inputTypeSchemas/BibSelectSchema.js';
import { BibIncludeSchema } from '../inputTypeSchemas/BibIncludeSchema.js';
export const BibArgsSchema: z.ZodType<Prisma.BibDefaultArgs> = z.object({
  select: z.lazy(() => BibSelectSchema).optional(),
  include: z.lazy(() => BibIncludeSchema).optional(),
}).strict();
export default BibArgsSchema;