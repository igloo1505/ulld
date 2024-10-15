import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutQaPairInputSchema } from './SubjectUpdateWithoutQaPairInputSchema.js';
import { SubjectUncheckedUpdateWithoutQaPairInputSchema } from './SubjectUncheckedUpdateWithoutQaPairInputSchema.js';
export const SubjectUpdateWithWhereUniqueWithoutQaPairInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutQaPairInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutQaPairInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutQaPairInputSchema) ]),
}).strict();
export default SubjectUpdateWithWhereUniqueWithoutQaPairInputSchema;