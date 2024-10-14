import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RelatedValuesSelectSchema } from '../inputTypeSchemas/RelatedValuesSelectSchema';
import { RelatedValuesIncludeSchema } from '../inputTypeSchemas/RelatedValuesIncludeSchema';

export const RelatedValuesArgsSchema: z.ZodType<Prisma.RelatedValuesDefaultArgs> = z.object({
  select: z.lazy(() => RelatedValuesSelectSchema).optional(),
  include: z.lazy(() => RelatedValuesIncludeSchema).optional(),
}).strict();

export default RelatedValuesArgsSchema;
