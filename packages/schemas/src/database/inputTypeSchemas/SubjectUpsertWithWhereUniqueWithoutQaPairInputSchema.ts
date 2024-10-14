import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutQaPairInputSchema } from './SubjectUpdateWithoutQaPairInputSchema';
import { SubjectUncheckedUpdateWithoutQaPairInputSchema } from './SubjectUncheckedUpdateWithoutQaPairInputSchema';
import { SubjectCreateWithoutQaPairInputSchema } from './SubjectCreateWithoutQaPairInputSchema';
import { SubjectUncheckedCreateWithoutQaPairInputSchema } from './SubjectUncheckedCreateWithoutQaPairInputSchema';

export const SubjectUpsertWithWhereUniqueWithoutQaPairInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutQaPairInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutQaPairInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutQaPairInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutQaPairInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutQaPairInputSchema) ]),
}).strict();

export default SubjectUpsertWithWhereUniqueWithoutQaPairInputSchema;
