import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/RelatedValuesSelectSchema.js
..//inputTypeSchemas/RelatedValuesIncludeSchema.js
export const RelatedValuesArgsSchema: z.ZodType<Prisma.RelatedValuesDefaultArgs> = z.object({
  select: z.lazy(() => RelatedValuesSelectSchema).optional(),
  include: z.lazy(() => RelatedValuesIncludeSchema).optional(),
}).strict();
export default RelatedValuesArgsSchema;