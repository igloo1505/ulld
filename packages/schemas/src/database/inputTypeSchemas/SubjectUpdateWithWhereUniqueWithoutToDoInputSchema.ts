import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from '../SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutToDoInputSchema } from '../SubjectUpdateWithoutToDoInputSchema.js';
import { SubjectUncheckedUpdateWithoutToDoInputSchema } from '../SubjectUncheckedUpdateWithoutToDoInputSchema.js';
export const SubjectUpdateWithWhereUniqueWithoutToDoInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutToDoInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutToDoInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutToDoInputSchema) ]),
}).strict();
export default SubjectUpdateWithWhereUniqueWithoutToDoInputSchema;