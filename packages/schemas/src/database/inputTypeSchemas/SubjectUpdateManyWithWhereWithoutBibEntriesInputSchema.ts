import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema';
import { SubjectUncheckedUpdateManyWithoutBibEntriesInputSchema } from './SubjectUncheckedUpdateManyWithoutBibEntriesInputSchema';

export const SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutBibEntriesInputSchema) ]),
}).strict();

export default SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema;
