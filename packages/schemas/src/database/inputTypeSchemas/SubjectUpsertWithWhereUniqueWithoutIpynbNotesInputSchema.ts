import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutIpynbNotesInputSchema } from './SubjectUpdateWithoutIpynbNotesInputSchema';
import { SubjectUncheckedUpdateWithoutIpynbNotesInputSchema } from './SubjectUncheckedUpdateWithoutIpynbNotesInputSchema';
import { SubjectCreateWithoutIpynbNotesInputSchema } from './SubjectCreateWithoutIpynbNotesInputSchema';
import { SubjectUncheckedCreateWithoutIpynbNotesInputSchema } from './SubjectUncheckedCreateWithoutIpynbNotesInputSchema';

export const SubjectUpsertWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutIpynbNotesInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutIpynbNotesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default SubjectUpsertWithWhereUniqueWithoutIpynbNotesInputSchema;
