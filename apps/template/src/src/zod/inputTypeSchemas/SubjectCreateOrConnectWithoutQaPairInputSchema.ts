import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectCreateWithoutQaPairInputSchema } from './SubjectCreateWithoutQaPairInputSchema';
import { SubjectUncheckedCreateWithoutQaPairInputSchema } from './SubjectUncheckedCreateWithoutQaPairInputSchema';

export const SubjectCreateOrConnectWithoutQaPairInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutQaPairInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutQaPairInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutQaPairInputSchema) ]),
}).strict();

export default SubjectCreateOrConnectWithoutQaPairInputSchema;
