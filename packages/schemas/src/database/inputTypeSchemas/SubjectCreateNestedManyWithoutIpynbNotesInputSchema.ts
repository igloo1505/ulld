import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectCreateWithoutIpynbNotesInputSchema } from './SubjectCreateWithoutIpynbNotesInputSchema.js';
import { SubjectUncheckedCreateWithoutIpynbNotesInputSchema } from './SubjectUncheckedCreateWithoutIpynbNotesInputSchema.js';
import { SubjectCreateOrConnectWithoutIpynbNotesInputSchema } from './SubjectCreateOrConnectWithoutIpynbNotesInputSchema.js';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
export const SubjectCreateNestedManyWithoutIpynbNotesInputSchema: z.ZodType<Prisma.SubjectCreateNestedManyWithoutIpynbNotesInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutIpynbNotesInputSchema),z.lazy(() => SubjectCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default SubjectCreateNestedManyWithoutIpynbNotesInputSchema;