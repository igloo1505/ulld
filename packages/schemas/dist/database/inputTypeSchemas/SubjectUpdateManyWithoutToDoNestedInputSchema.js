import { z } from 'zod';
import { SubjectCreateWithoutToDoInputSchema } from './SubjectCreateWithoutToDoInputSchema.js';
import { SubjectUncheckedCreateWithoutToDoInputSchema } from './SubjectUncheckedCreateWithoutToDoInputSchema.js';
import { SubjectCreateOrConnectWithoutToDoInputSchema } from './SubjectCreateOrConnectWithoutToDoInputSchema.js';
import { SubjectUpsertWithWhereUniqueWithoutToDoInputSchema } from './SubjectUpsertWithWhereUniqueWithoutToDoInputSchema.js';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithWhereUniqueWithoutToDoInputSchema } from './SubjectUpdateWithWhereUniqueWithoutToDoInputSchema.js';
import { SubjectUpdateManyWithWhereWithoutToDoInputSchema } from './SubjectUpdateManyWithWhereWithoutToDoInputSchema.js';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema.js';
export const SubjectUpdateManyWithoutToDoNestedInputSchema = z.object({
    create: z.union([z.lazy(() => SubjectCreateWithoutToDoInputSchema), z.lazy(() => SubjectCreateWithoutToDoInputSchema).array(), z.lazy(() => SubjectUncheckedCreateWithoutToDoInputSchema), z.lazy(() => SubjectUncheckedCreateWithoutToDoInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => SubjectCreateOrConnectWithoutToDoInputSchema), z.lazy(() => SubjectCreateOrConnectWithoutToDoInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => SubjectUpsertWithWhereUniqueWithoutToDoInputSchema), z.lazy(() => SubjectUpsertWithWhereUniqueWithoutToDoInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => SubjectUpdateWithWhereUniqueWithoutToDoInputSchema), z.lazy(() => SubjectUpdateWithWhereUniqueWithoutToDoInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => SubjectUpdateManyWithWhereWithoutToDoInputSchema), z.lazy(() => SubjectUpdateManyWithWhereWithoutToDoInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => SubjectScalarWhereInputSchema), z.lazy(() => SubjectScalarWhereInputSchema).array()]).optional(),
}).strict();
export default SubjectUpdateManyWithoutToDoNestedInputSchema;
