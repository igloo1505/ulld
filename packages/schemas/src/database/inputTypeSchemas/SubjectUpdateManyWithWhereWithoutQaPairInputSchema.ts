import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from '../SubjectScalarWhereInputSchema.js';
import { SubjectUpdateManyMutationInputSchema } from '../SubjectUpdateManyMutationInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutQaPairInputSchema } from '../SubjectUncheckedUpdateManyWithoutQaPairInputSchema.js';
export const SubjectUpdateManyWithWhereWithoutQaPairInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutQaPairInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutQaPairInputSchema) ]),
}).strict();
export default SubjectUpdateManyWithWhereWithoutQaPairInputSchema;