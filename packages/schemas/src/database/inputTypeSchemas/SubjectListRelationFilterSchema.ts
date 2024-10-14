import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereInputSchema } from './SubjectWhereInputSchema';

export const SubjectListRelationFilterSchema: z.ZodType<Prisma.SubjectListRelationFilter> = z.object({
  every: z.lazy(() => SubjectWhereInputSchema).optional(),
  some: z.lazy(() => SubjectWhereInputSchema).optional(),
  none: z.lazy(() => SubjectWhereInputSchema).optional()
}).strict();

export default SubjectListRelationFilterSchema;
