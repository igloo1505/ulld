import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutIpynbNotesInputSchema } from './SubjectCreateWithoutIpynbNotesInputSchema';
import { SubjectUncheckedCreateWithoutIpynbNotesInputSchema } from './SubjectUncheckedCreateWithoutIpynbNotesInputSchema';
import { SubjectCreateOrConnectWithoutIpynbNotesInputSchema } from './SubjectCreateOrConnectWithoutIpynbNotesInputSchema';
import { SubjectUpsertWithWhereUniqueWithoutIpynbNotesInputSchema } from './SubjectUpsertWithWhereUniqueWithoutIpynbNotesInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithWhereUniqueWithoutIpynbNotesInputSchema } from './SubjectUpdateWithWhereUniqueWithoutIpynbNotesInputSchema';
import { SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema } from './SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';

export const SubjectUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema: z.ZodType<Prisma.SubjectUncheckedUpdateManyWithoutIpynbNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutIpynbNotesInputSchema),z.lazy(() => SubjectCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubjectUpsertWithWhereUniqueWithoutIpynbNotesInputSchema),z.lazy(() => SubjectUpsertWithWhereUniqueWithoutIpynbNotesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubjectUpdateWithWhereUniqueWithoutIpynbNotesInputSchema),z.lazy(() => SubjectUpdateWithWhereUniqueWithoutIpynbNotesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema),z.lazy(() => SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubjectScalarWhereInputSchema),z.lazy(() => SubjectScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SubjectUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema;
