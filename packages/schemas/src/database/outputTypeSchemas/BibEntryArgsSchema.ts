import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibEntrySelectSchema } from '../inputTypeSchemas/BibEntrySelectSchema';
import { BibEntryIncludeSchema } from '../inputTypeSchemas/BibEntryIncludeSchema';

export const BibEntryArgsSchema: z.ZodType<Prisma.BibEntryDefaultArgs> = z.object({
  select: z.lazy(() => BibEntrySelectSchema).optional(),
  include: z.lazy(() => BibEntryIncludeSchema).optional(),
}).strict();

export default BibEntryArgsSchema;
