import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutEquationsInputSchema } from './SubjectUpdateWithoutEquationsInputSchema';
import { SubjectUncheckedUpdateWithoutEquationsInputSchema } from './SubjectUncheckedUpdateWithoutEquationsInputSchema';
import { SubjectCreateWithoutEquationsInputSchema } from './SubjectCreateWithoutEquationsInputSchema';
import { SubjectUncheckedCreateWithoutEquationsInputSchema } from './SubjectUncheckedCreateWithoutEquationsInputSchema';

export const SubjectUpsertWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutEquationsInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutEquationsInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutEquationsInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();

export default SubjectUpsertWithWhereUniqueWithoutEquationsInputSchema;
