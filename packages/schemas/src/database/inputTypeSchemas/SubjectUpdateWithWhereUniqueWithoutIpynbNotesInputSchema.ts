import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutIpynbNotesInputSchema } from './SubjectUpdateWithoutIpynbNotesInputSchema';
import { SubjectUncheckedUpdateWithoutIpynbNotesInputSchema } from './SubjectUncheckedUpdateWithoutIpynbNotesInputSchema';

export const SubjectUpdateWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutIpynbNotesInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default SubjectUpdateWithWhereUniqueWithoutIpynbNotesInputSchema;
