import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFilterSchema } from '../StringFilterSchema.js';
import { IntNullableFilterSchema } from '../IntNullableFilterSchema.js';
import { DateTimeFilterSchema } from '../DateTimeFilterSchema.js';
export const SubjectScalarWhereInputSchema: z.ZodType<Prisma.SubjectScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SubjectScalarWhereInputSchema),z.lazy(() => SubjectScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubjectScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubjectScalarWhereInputSchema),z.lazy(() => SubjectScalarWhereInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kanbanId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();
export default SubjectScalarWhereInputSchema;