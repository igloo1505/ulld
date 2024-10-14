import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutQaPairInputSchema } from './SubjectUpdateWithoutQaPairInputSchema';
import { SubjectUncheckedUpdateWithoutQaPairInputSchema } from './SubjectUncheckedUpdateWithoutQaPairInputSchema';

export const SubjectUpdateWithWhereUniqueWithoutQaPairInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutQaPairInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutQaPairInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutQaPairInputSchema) ]),
}).strict();

export default SubjectUpdateWithWhereUniqueWithoutQaPairInputSchema;
