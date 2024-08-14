import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectCreateWithoutEquationsInputSchema } from './SubjectCreateWithoutEquationsInputSchema';
import { SubjectUncheckedCreateWithoutEquationsInputSchema } from './SubjectUncheckedCreateWithoutEquationsInputSchema';

export const SubjectCreateOrConnectWithoutEquationsInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutEquationsInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutEquationsInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();

export default SubjectCreateOrConnectWithoutEquationsInputSchema;
