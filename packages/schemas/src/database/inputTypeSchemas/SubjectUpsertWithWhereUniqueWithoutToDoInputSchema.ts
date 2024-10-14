import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutToDoInputSchema } from './SubjectUpdateWithoutToDoInputSchema';
import { SubjectUncheckedUpdateWithoutToDoInputSchema } from './SubjectUncheckedUpdateWithoutToDoInputSchema';
import { SubjectCreateWithoutToDoInputSchema } from './SubjectCreateWithoutToDoInputSchema';
import { SubjectUncheckedCreateWithoutToDoInputSchema } from './SubjectUncheckedCreateWithoutToDoInputSchema';

export const SubjectUpsertWithWhereUniqueWithoutToDoInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutToDoInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutToDoInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutToDoInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutToDoInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutToDoInputSchema) ]),
}).strict();

export default SubjectUpsertWithWhereUniqueWithoutToDoInputSchema;
