import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema';
import { SubjectUncheckedUpdateManyWithoutToDoInputSchema } from './SubjectUncheckedUpdateManyWithoutToDoInputSchema';

export const SubjectUpdateManyWithWhereWithoutToDoInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutToDoInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutToDoInputSchema) ]),
}).strict();

export default SubjectUpdateManyWithWhereWithoutToDoInputSchema;
