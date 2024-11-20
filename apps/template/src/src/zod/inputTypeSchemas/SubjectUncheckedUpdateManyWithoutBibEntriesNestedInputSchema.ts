import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutBibEntriesInputSchema } from './SubjectCreateWithoutBibEntriesInputSchema';
import { SubjectUncheckedCreateWithoutBibEntriesInputSchema } from './SubjectUncheckedCreateWithoutBibEntriesInputSchema';
import { SubjectCreateOrConnectWithoutBibEntriesInputSchema } from './SubjectCreateOrConnectWithoutBibEntriesInputSchema';
import { SubjectUpsertWithWhereUniqueWithoutBibEntriesInputSchema } from './SubjectUpsertWithWhereUniqueWithoutBibEntriesInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithWhereUniqueWithoutBibEntriesInputSchema } from './SubjectUpdateWithWhereUniqueWithoutBibEntriesInputSchema';
import { SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema } from './SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';

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
