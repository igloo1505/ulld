import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutIpynbNotesInputSchema } from './SubjectUpdateWithoutIpynbNotesInputSchema.js';
import { SubjectUncheckedUpdateWithoutIpynbNotesInputSchema } from './SubjectUncheckedUpdateWithoutIpynbNotesInputSchema.js';
import { SubjectCreateWithoutIpynbNotesInputSchema } from './SubjectCreateWithoutIpynbNotesInputSchema.js';
import { SubjectUncheckedCreateWithoutIpynbNotesInputSchema } from './SubjectUncheckedCreateWithoutIpynbNotesInputSchema.js';
export const SubjectUpsertWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutIpynbNotesInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutIpynbNotesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();
export default SubjectUpsertWithWhereUniqueWithoutIpynbNotesInputSchema;