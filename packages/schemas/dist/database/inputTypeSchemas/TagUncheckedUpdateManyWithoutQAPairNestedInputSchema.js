import { z } from 'zod';
import { TagCreateWithoutQAPairInputSchema } from './TagCreateWithoutQAPairInputSchema.js';
import { TagUncheckedCreateWithoutQAPairInputSchema } from './TagUncheckedCreateWithoutQAPairInputSchema.js';
import { TagCreateOrConnectWithoutQAPairInputSchema } from './TagCreateOrConnectWithoutQAPairInputSchema.js';
import { TagUpsertWithWhereUniqueWithoutQAPairInputSchema } from './TagUpsertWithWhereUniqueWithoutQAPairInputSchema.js';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithWhereUniqueWithoutQAPairInputSchema } from './TagUpdateWithWhereUniqueWithoutQAPairInputSchema.js';
import { TagUpdateManyWithWhereWithoutQAPairInputSchema } from './TagUpdateManyWithWhereWithoutQAPairInputSchema.js';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema.js';
export const TagUncheckedUpdateManyWithoutQAPairNestedInputSchema = z.object({
    create: z.union([z.lazy(() => TagCreateWithoutQAPairInputSchema), z.lazy(() => TagCreateWithoutQAPairInputSchema).array(), z.lazy(() => TagUncheckedCreateWithoutQAPairInputSchema), z.lazy(() => TagUncheckedCreateWithoutQAPairInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutQAPairInputSchema), z.lazy(() => TagCreateOrConnectWithoutQAPairInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => TagUpsertWithWhereUniqueWithoutQAPairInputSchema), z.lazy(() => TagUpsertWithWhereUniqueWithoutQAPairInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => TagUpdateWithWhereUniqueWithoutQAPairInputSchema), z.lazy(() => TagUpdateWithWhereUniqueWithoutQAPairInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => TagUpdateManyWithWhereWithoutQAPairInputSchema), z.lazy(() => TagUpdateManyWithWhereWithoutQAPairInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => TagScalarWhereInputSchema), z.lazy(() => TagScalarWhereInputSchema).array()]).optional(),
}).strict();
export default TagUncheckedUpdateManyWithoutQAPairNestedInputSchema;
