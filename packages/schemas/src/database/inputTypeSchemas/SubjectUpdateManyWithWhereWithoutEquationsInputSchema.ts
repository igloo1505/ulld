import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema';
import { SubjectUncheckedUpdateManyWithoutEquationsInputSchema } from './SubjectUncheckedUpdateManyWithoutEquationsInputSchema';

export const SubjectUpdateManyWithWhereWithoutEquationsInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutEquationsInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutEquationsInputSchema) ]),
}).strict();

export default SubjectUpdateManyWithWhereWithoutEquationsInputSchema;
