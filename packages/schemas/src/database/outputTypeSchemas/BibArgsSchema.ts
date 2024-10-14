import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibSelectSchema } from '../inputTypeSchemas/BibSelectSchema';
import { BibIncludeSchema } from '../inputTypeSchemas/BibIncludeSchema';

export const BibArgsSchema: z.ZodType<Prisma.BibDefaultArgs> = z.object({
  select: z.lazy(() => BibSelectSchema).optional(),
  include: z.lazy(() => BibIncludeSchema).optional(),
}).strict();

export default BibArgsSchema;
