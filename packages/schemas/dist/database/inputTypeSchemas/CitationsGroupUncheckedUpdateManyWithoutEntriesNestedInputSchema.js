import { z } from 'zod';
import { CitationsGroupCreateWithoutEntriesInputSchema } from './CitationsGroupCreateWithoutEntriesInputSchema.js';
import { CitationsGroupUncheckedCreateWithoutEntriesInputSchema } from './CitationsGroupUncheckedCreateWithoutEntriesInputSchema.js';
import { CitationsGroupCreateOrConnectWithoutEntriesInputSchema } from './CitationsGroupCreateOrConnectWithoutEntriesInputSchema.js';
import { CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema } from './CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema.js';
import { CitationsGroupWhereUniqueInputSchema } from './CitationsGroupWhereUniqueInputSchema.js';
import { CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema } from './CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema.js';
import { CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema } from './CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema.js';
import { CitationsGroupScalarWhereInputSchema } from './CitationsGroupScalarWhereInputSchema.js';
export const CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema = z.object({
    create: z.union([z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema), z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema).array(), z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema), z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => CitationsGroupWhereUniqueInputSchema), z.lazy(() => CitationsGroupWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => CitationsGroupWhereUniqueInputSchema), z.lazy(() => CitationsGroupWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => CitationsGroupWhereUniqueInputSchema), z.lazy(() => CitationsGroupWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => CitationsGroupWhereUniqueInputSchema), z.lazy(() => CitationsGroupWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => CitationsGroupScalarWhereInputSchema), z.lazy(() => CitationsGroupScalarWhereInputSchema).array()]).optional(),
}).strict();
export default CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema;
