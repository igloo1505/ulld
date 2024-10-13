import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from '../SubjectScalarWhereInputSchema.js';
import { SubjectUpdateManyMutationInputSchema } from '../SubjectUpdateManyMutationInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutBibEntriesInputSchema } from '../SubjectUncheckedUpdateManyWithoutBibEntriesInputSchema.js';
export const SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutBibEntriesInputSchema) ]),
}).strict();
export default SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema;