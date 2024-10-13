import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from '../SubjectScalarWhereInputSchema.js';
import { SubjectUpdateManyMutationInputSchema } from '../SubjectUpdateManyMutationInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutEquationsInputSchema } from '../SubjectUncheckedUpdateManyWithoutEquationsInputSchema.js';
export const SubjectUpdateManyWithWhereWithoutEquationsInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutEquationsInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutEquationsInputSchema) ]),
}).strict();
export default SubjectUpdateManyWithWhereWithoutEquationsInputSchema;