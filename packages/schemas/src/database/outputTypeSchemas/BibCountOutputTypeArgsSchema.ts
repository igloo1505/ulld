import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibCountOutputTypeSelectSchema } from './BibCountOutputTypeSelectSchema';

export const BibCountOutputTypeArgsSchema: z.ZodType<Prisma.BibCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BibCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BibCountOutputTypeSelectSchema;
