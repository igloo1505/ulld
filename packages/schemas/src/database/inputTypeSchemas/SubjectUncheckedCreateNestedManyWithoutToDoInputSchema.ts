import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectCreateWithoutToDoInputSchema } from '../SubjectCreateWithoutToDoInputSchema.js';
import { SubjectUncheckedCreateWithoutToDoInputSchema } from '../SubjectUncheckedCreateWithoutToDoInputSchema.js';
import { SubjectCreateOrConnectWithoutToDoInputSchema } from '../SubjectCreateOrConnectWithoutToDoInputSchema.js';
import { SubjectWhereUniqueInputSchema } from '../SubjectWhereUniqueInputSchema.js';
export const SubjectUncheckedCreateNestedManyWithoutToDoInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateNestedManyWithoutToDoInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutToDoInputSchema),z.lazy(() => SubjectCreateWithoutToDoInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutToDoInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutToDoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutToDoInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutToDoInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default SubjectUncheckedCreateNestedManyWithoutToDoInputSchema;