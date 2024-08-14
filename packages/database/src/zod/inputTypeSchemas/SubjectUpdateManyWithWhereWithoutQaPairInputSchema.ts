import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema';
import { SubjectUncheckedUpdateManyWithoutQaPairInputSchema } from './SubjectUncheckedUpdateManyWithoutQaPairInputSchema';

export const SubjectUpdateManyWithWhereWithoutQaPairInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutQaPairInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutQaPairInputSchema) ]),
}).strict();

export default SubjectUpdateManyWithWhereWithoutQaPairInputSchema;
