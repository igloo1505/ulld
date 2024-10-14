import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectCreateWithoutToDoInputSchema } from './SubjectCreateWithoutToDoInputSchema';
import { SubjectUncheckedCreateWithoutToDoInputSchema } from './SubjectUncheckedCreateWithoutToDoInputSchema';

export const SubjectCreateOrConnectWithoutToDoInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutToDoInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutToDoInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutToDoInputSchema) ]),
}).strict();

export default SubjectCreateOrConnectWithoutToDoInputSchema;
