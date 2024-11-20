import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutEquationsInputSchema } from './SubjectUpdateWithoutEquationsInputSchema';
import { SubjectUncheckedUpdateWithoutEquationsInputSchema } from './SubjectUncheckedUpdateWithoutEquationsInputSchema';

export const SubjectUpdateWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutEquationsInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutEquationsInputSchema) ]),
}).strict();

export default SubjectUpdateWithWhereUniqueWithoutEquationsInputSchema;
