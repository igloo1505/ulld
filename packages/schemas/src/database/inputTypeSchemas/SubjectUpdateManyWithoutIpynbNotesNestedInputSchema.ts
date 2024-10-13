import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectCreateWithoutIpynbNotesInputSchema } from '../SubjectCreateWithoutIpynbNotesInputSchema.js';
import { SubjectUncheckedCreateWithoutIpynbNotesInputSchema } from '../SubjectUncheckedCreateWithoutIpynbNotesInputSchema.js';
import { SubjectCreateOrConnectWithoutIpynbNotesInputSchema } from '../SubjectCreateOrConnectWithoutIpynbNotesInputSchema.js';
import { SubjectUpsertWithWhereUniqueWithoutIpynbNotesInputSchema } from '../SubjectUpsertWithWhereUniqueWithoutIpynbNotesInputSchema.js';
import { SubjectWhereUniqueInputSchema } from '../SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithWhereUniqueWithoutIpynbNotesInputSchema } from '../SubjectUpdateWithWhereUniqueWithoutIpynbNotesInputSchema.js';
import { SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema } from '../SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema.js';
import { SubjectScalarWhereInputSchema } from '../SubjectScalarWhereInputSchema.js';
export const SubjectUpdateManyWithoutIpynbNotesNestedInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithoutIpynbNotesNestedInput> = z.object({
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
export default SubjectUpdateManyWithoutIpynbNotesNestedInputSchema;