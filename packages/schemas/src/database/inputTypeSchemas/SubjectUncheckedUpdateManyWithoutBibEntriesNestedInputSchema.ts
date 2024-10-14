import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectCreateWithoutBibEntriesInputSchema } from './SubjectCreateWithoutBibEntriesInputSchema.js';
import { SubjectUncheckedCreateWithoutBibEntriesInputSchema } from './SubjectUncheckedCreateWithoutBibEntriesInputSchema.js';
import { SubjectCreateOrConnectWithoutBibEntriesInputSchema } from './SubjectCreateOrConnectWithoutBibEntriesInputSchema.js';
import { SubjectUpsertWithWhereUniqueWithoutBibEntriesInputSchema } from './SubjectUpsertWithWhereUniqueWithoutBibEntriesInputSchema.js';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithWhereUniqueWithoutBibEntriesInputSchema } from './SubjectUpdateWithWhereUniqueWithoutBibEntriesInputSchema.js';
import { SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema } from './SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema.js';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema.js';
export const SubjectUncheckedUpdateManyWithoutBibEntriesNestedInputSchema: z.ZodType<Prisma.SubjectUncheckedUpdateManyWithoutBibEntriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutBibEntriesInputSchema),z.lazy(() => SubjectCreateWithoutBibEntriesInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutBibEntriesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutBibEntriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutBibEntriesInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutBibEntriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubjectUpsertWithWhereUniqueWithoutBibEntriesInputSchema),z.lazy(() => SubjectUpsertWithWhereUniqueWithoutBibEntriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubjectUpdateWithWhereUniqueWithoutBibEntriesInputSchema),z.lazy(() => SubjectUpdateWithWhereUniqueWithoutBibEntriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema),z.lazy(() => SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubjectScalarWhereInputSchema),z.lazy(() => SubjectScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default SubjectUncheckedUpdateManyWithoutBibEntriesNestedInputSchema;