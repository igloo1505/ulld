import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutMdxNotesInputSchema } from './SubjectCreateWithoutMdxNotesInputSchema';
import { SubjectUncheckedCreateWithoutMdxNotesInputSchema } from './SubjectUncheckedCreateWithoutMdxNotesInputSchema';
import { SubjectCreateOrConnectWithoutMdxNotesInputSchema } from './SubjectCreateOrConnectWithoutMdxNotesInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';

export const SubjectCreateNestedManyWithoutMdxNotesInputSchema: z.ZodType<Prisma.SubjectCreateNestedManyWithoutMdxNotesInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutMdxNotesInputSchema),z.lazy(() => SubjectCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SubjectCreateNestedManyWithoutMdxNotesInputSchema;
