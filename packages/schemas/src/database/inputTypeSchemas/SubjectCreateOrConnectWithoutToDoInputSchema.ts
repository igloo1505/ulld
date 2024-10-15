import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectCreateWithoutToDoInputSchema } from './SubjectCreateWithoutToDoInputSchema.js';
import { SubjectUncheckedCreateWithoutToDoInputSchema } from './SubjectUncheckedCreateWithoutToDoInputSchema.js';
export const SubjectCreateOrConnectWithoutToDoInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutToDoInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutToDoInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutToDoInputSchema) ]),
}).strict();
export default SubjectCreateOrConnectWithoutToDoInputSchema;