import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectCreateWithoutMdxNotesInputSchema } from './SubjectCreateWithoutMdxNotesInputSchema';
import { SubjectUncheckedCreateWithoutMdxNotesInputSchema } from './SubjectUncheckedCreateWithoutMdxNotesInputSchema';

export const SubjectCreateOrConnectWithoutMdxNotesInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutMdxNotesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();

export default SubjectCreateOrConnectWithoutMdxNotesInputSchema;
