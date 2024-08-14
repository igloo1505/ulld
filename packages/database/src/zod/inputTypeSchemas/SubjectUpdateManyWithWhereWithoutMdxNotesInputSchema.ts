import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema';
import { SubjectUncheckedUpdateManyWithoutMdxNotesInputSchema } from './SubjectUncheckedUpdateManyWithoutMdxNotesInputSchema';

export const SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutMdxNotesInputSchema) ]),
}).strict();

export default SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema;
