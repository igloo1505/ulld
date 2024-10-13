import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from '../SubjectScalarWhereInputSchema.js';
import { SubjectUpdateManyMutationInputSchema } from '../SubjectUpdateManyMutationInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema } from '../SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema.js';
export const SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema) ]),
}).strict();
export default SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema;