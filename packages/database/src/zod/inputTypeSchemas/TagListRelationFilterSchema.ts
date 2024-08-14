import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagListRelationFilterSchema: z.ZodType<Prisma.TagListRelationFilter> = z.object({
  every: z.lazy(() => TagWhereInputSchema).optional(),
  some: z.lazy(() => TagWhereInputSchema).optional(),
  none: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagListRelationFilterSchema;
