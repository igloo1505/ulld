import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutEquationsInputSchema } from './SubjectUpdateWithoutEquationsInputSchema.js';
import { SubjectUncheckedUpdateWithoutEquationsInputSchema } from './SubjectUncheckedUpdateWithoutEquationsInputSchema.js';
import { SubjectCreateWithoutEquationsInputSchema } from './SubjectCreateWithoutEquationsInputSchema.js';
import { SubjectUncheckedCreateWithoutEquationsInputSchema } from './SubjectUncheckedCreateWithoutEquationsInputSchema.js';
export const SubjectUpsertWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutEquationsInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutEquationsInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutEquationsInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();
export default SubjectUpsertWithWhereUniqueWithoutEquationsInputSchema;