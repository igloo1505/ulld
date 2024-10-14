import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RelatedValuesCountOutputTypeSelectSchema } from './RelatedValuesCountOutputTypeSelectSchema';

export const RelatedValuesCountOutputTypeArgsSchema: z.ZodType<Prisma.RelatedValuesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => RelatedValuesCountOutputTypeSelectSchema).nullish(),
}).strict();

export default RelatedValuesCountOutputTypeSelectSchema;
