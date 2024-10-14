import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutMdxNotesInputSchema } from './SubjectUpdateWithoutMdxNotesInputSchema';
import { SubjectUncheckedUpdateWithoutMdxNotesInputSchema } from './SubjectUncheckedUpdateWithoutMdxNotesInputSchema';
import { SubjectCreateWithoutMdxNotesInputSchema } from './SubjectCreateWithoutMdxNotesInputSchema';
import { SubjectUncheckedCreateWithoutMdxNotesInputSchema } from './SubjectUncheckedCreateWithoutMdxNotesInputSchema';

export const SubjectUpsertWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutMdxNotesInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutMdxNotesInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutMdxNotesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();

export default SubjectUpsertWithWhereUniqueWithoutMdxNotesInputSchema;
