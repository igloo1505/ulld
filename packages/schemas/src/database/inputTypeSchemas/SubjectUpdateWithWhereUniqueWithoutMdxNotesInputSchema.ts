import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutMdxNotesInputSchema } from './SubjectUpdateWithoutMdxNotesInputSchema';
import { SubjectUncheckedUpdateWithoutMdxNotesInputSchema } from './SubjectUncheckedUpdateWithoutMdxNotesInputSchema';

export const SubjectUpdateWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutMdxNotesInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutMdxNotesInputSchema) ]),
}).strict();

export default SubjectUpdateWithWhereUniqueWithoutMdxNotesInputSchema;
