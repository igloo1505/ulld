import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutToDoInputSchema } from './SubjectCreateWithoutToDoInputSchema';
import { SubjectUncheckedCreateWithoutToDoInputSchema } from './SubjectUncheckedCreateWithoutToDoInputSchema';
import { SubjectCreateOrConnectWithoutToDoInputSchema } from './SubjectCreateOrConnectWithoutToDoInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';

export const SubjectCreateNestedManyWithoutToDoInputSchema: z.ZodType<Prisma.SubjectCreateNestedManyWithoutToDoInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutToDoInputSchema),z.lazy(() => SubjectCreateWithoutToDoInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutToDoInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutToDoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutToDoInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutToDoInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SubjectCreateNestedManyWithoutToDoInputSchema;
