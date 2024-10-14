import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutEquationsInputSchema } from './SubjectUpdateWithoutEquationsInputSchema.js';
import { SubjectUncheckedUpdateWithoutEquationsInputSchema } from './SubjectUncheckedUpdateWithoutEquationsInputSchema.js';
export const SubjectUpdateWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutEquationsInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutEquationsInputSchema) ]),
}).strict();
export default SubjectUpdateWithWhereUniqueWithoutEquationsInputSchema;