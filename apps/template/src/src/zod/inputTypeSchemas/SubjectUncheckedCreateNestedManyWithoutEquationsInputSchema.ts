import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutEquationsInputSchema } from './SubjectCreateWithoutEquationsInputSchema';
import { SubjectUncheckedCreateWithoutEquationsInputSchema } from './SubjectUncheckedCreateWithoutEquationsInputSchema';
import { SubjectCreateOrConnectWithoutEquationsInputSchema } from './SubjectCreateOrConnectWithoutEquationsInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';

export const SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateNestedManyWithoutEquationsInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutEquationsInputSchema),z.lazy(() => SubjectCreateWithoutEquationsInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutEquationsInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutEquationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutEquationsInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutEquationsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema;
