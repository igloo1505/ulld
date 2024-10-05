import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema';
import { SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema } from './SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema';

export const SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema) ]),
}).strict();

export default SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema;
