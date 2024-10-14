import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutIpynbNotesInputSchema } from './SubjectCreateWithoutIpynbNotesInputSchema';
import { SubjectUncheckedCreateWithoutIpynbNotesInputSchema } from './SubjectUncheckedCreateWithoutIpynbNotesInputSchema';
import { SubjectCreateOrConnectWithoutIpynbNotesInputSchema } from './SubjectCreateOrConnectWithoutIpynbNotesInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';

export const SubjectCreateNestedManyWithoutIpynbNotesInputSchema: z.ZodType<Prisma.SubjectCreateNestedManyWithoutIpynbNotesInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutIpynbNotesInputSchema),z.lazy(() => SubjectCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SubjectCreateNestedManyWithoutIpynbNotesInputSchema;
