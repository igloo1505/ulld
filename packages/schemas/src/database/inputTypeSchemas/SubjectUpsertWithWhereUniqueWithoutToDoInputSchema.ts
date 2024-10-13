import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from '../SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutToDoInputSchema } from '../SubjectUpdateWithoutToDoInputSchema.js';
import { SubjectUncheckedUpdateWithoutToDoInputSchema } from '../SubjectUncheckedUpdateWithoutToDoInputSchema.js';
import { SubjectCreateWithoutToDoInputSchema } from '../SubjectCreateWithoutToDoInputSchema.js';
import { SubjectUncheckedCreateWithoutToDoInputSchema } from '../SubjectUncheckedCreateWithoutToDoInputSchema.js';
export const SubjectUpsertWithWhereUniqueWithoutToDoInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutToDoInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutToDoInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutToDoInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutToDoInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutToDoInputSchema) ]),
}).strict();
export default SubjectUpsertWithWhereUniqueWithoutToDoInputSchema;