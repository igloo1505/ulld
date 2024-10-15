import { z } from 'zod';
import { SubjectCreateWithoutQaPairInputSchema } from './SubjectCreateWithoutQaPairInputSchema.js';
import { SubjectUncheckedCreateWithoutQaPairInputSchema } from './SubjectUncheckedCreateWithoutQaPairInputSchema.js';
import { SubjectCreateOrConnectWithoutQaPairInputSchema } from './SubjectCreateOrConnectWithoutQaPairInputSchema.js';
import { SubjectUpsertWithWhereUniqueWithoutQaPairInputSchema } from './SubjectUpsertWithWhereUniqueWithoutQaPairInputSchema.js';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithWhereUniqueWithoutQaPairInputSchema } from './SubjectUpdateWithWhereUniqueWithoutQaPairInputSchema.js';
import { SubjectUpdateManyWithWhereWithoutQaPairInputSchema } from './SubjectUpdateManyWithWhereWithoutQaPairInputSchema.js';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema.js';
export const SubjectUncheckedUpdateManyWithoutQaPairNestedInputSchema = z.object({
    create: z.union([z.lazy(() => SubjectCreateWithoutQaPairInputSchema), z.lazy(() => SubjectCreateWithoutQaPairInputSchema).array(), z.lazy(() => SubjectUncheckedCreateWithoutQaPairInputSchema), z.lazy(() => SubjectUncheckedCreateWithoutQaPairInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => SubjectCreateOrConnectWithoutQaPairInputSchema), z.lazy(() => SubjectCreateOrConnectWithoutQaPairInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => SubjectUpsertWithWhereUniqueWithoutQaPairInputSchema), z.lazy(() => SubjectUpsertWithWhereUniqueWithoutQaPairInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => SubjectUpdateWithWhereUniqueWithoutQaPairInputSchema), z.lazy(() => SubjectUpdateWithWhereUniqueWithoutQaPairInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => SubjectUpdateManyWithWhereWithoutQaPairInputSchema), z.lazy(() => SubjectUpdateManyWithWhereWithoutQaPairInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => SubjectScalarWhereInputSchema), z.lazy(() => SubjectScalarWhereInputSchema).array()]).optional(),
}).strict();
export default SubjectUncheckedUpdateManyWithoutQaPairNestedInputSchema;
