import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutMdxNotesInputSchema } from './SubjectUpdateWithoutMdxNotesInputSchema.js';
import { SubjectUncheckedUpdateWithoutMdxNotesInputSchema } from './SubjectUncheckedUpdateWithoutMdxNotesInputSchema.js';
import { SubjectCreateWithoutMdxNotesInputSchema } from './SubjectCreateWithoutMdxNotesInputSchema.js';
import { SubjectUncheckedCreateWithoutMdxNotesInputSchema } from './SubjectUncheckedCreateWithoutMdxNotesInputSchema.js';
export const SubjectUpsertWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutMdxNotesInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutMdxNotesInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutMdxNotesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();
export default SubjectUpsertWithWhereUniqueWithoutMdxNotesInputSchema;