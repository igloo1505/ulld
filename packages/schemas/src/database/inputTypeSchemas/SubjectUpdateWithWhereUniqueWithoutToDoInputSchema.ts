import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutToDoInputSchema } from './SubjectUpdateWithoutToDoInputSchema';
import { SubjectUncheckedUpdateWithoutToDoInputSchema } from './SubjectUncheckedUpdateWithoutToDoInputSchema';

export const SubjectUpdateWithWhereUniqueWithoutToDoInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutToDoInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutToDoInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutToDoInputSchema) ]),
}).strict();

export default SubjectUpdateWithWhereUniqueWithoutToDoInputSchema;
