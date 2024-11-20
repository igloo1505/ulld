import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CitationsGroupCreateWithoutEntriesInputSchema } from './CitationsGroupCreateWithoutEntriesInputSchema';
import { CitationsGroupUncheckedCreateWithoutEntriesInputSchema } from './CitationsGroupUncheckedCreateWithoutEntriesInputSchema';
import { CitationsGroupCreateOrConnectWithoutEntriesInputSchema } from './CitationsGroupCreateOrConnectWithoutEntriesInputSchema';
import { CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema } from './CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema';
import { CitationsGroupWhereUniqueInputSchema } from './CitationsGroupWhereUniqueInputSchema';
import { CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema } from './CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema';
import { CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema } from './CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema';
import { CitationsGroupScalarWhereInputSchema } from './CitationsGroupScalarWhereInputSchema';

export const CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema: z.ZodType<Prisma.CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema),z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema).array(),z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema),z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema),z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema),z.lazy(() => CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CitationsGroupWhereUniqueInputSchema),z.lazy(() => CitationsGroupWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CitationsGroupWhereUniqueInputSchema),z.lazy(() => CitationsGroupWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CitationsGroupWhereUniqueInputSchema),z.lazy(() => CitationsGroupWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CitationsGroupWhereUniqueInputSchema),z.lazy(() => CitationsGroupWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema),z.lazy(() => CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema),z.lazy(() => CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CitationsGroupScalarWhereInputSchema),z.lazy(() => CitationsGroupScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema;
