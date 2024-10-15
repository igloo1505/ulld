import { z } from 'zod';
import { TagCreateWithoutIpynbNotesInputSchema } from './TagCreateWithoutIpynbNotesInputSchema.js';
import { TagUncheckedCreateWithoutIpynbNotesInputSchema } from './TagUncheckedCreateWithoutIpynbNotesInputSchema.js';
import { TagCreateOrConnectWithoutIpynbNotesInputSchema } from './TagCreateOrConnectWithoutIpynbNotesInputSchema.js';
import { TagUpsertWithWhereUniqueWithoutIpynbNotesInputSchema } from './TagUpsertWithWhereUniqueWithoutIpynbNotesInputSchema.js';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithWhereUniqueWithoutIpynbNotesInputSchema } from './TagUpdateWithWhereUniqueWithoutIpynbNotesInputSchema.js';
import { TagUpdateManyWithWhereWithoutIpynbNotesInputSchema } from './TagUpdateManyWithWhereWithoutIpynbNotesInputSchema.js';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema.js';
export const TagUpdateManyWithoutIpynbNotesNestedInputSchema = z.object({
    create: z.union([z.lazy(() => TagCreateWithoutIpynbNotesInputSchema), z.lazy(() => TagCreateWithoutIpynbNotesInputSchema).array(), z.lazy(() => TagUncheckedCreateWithoutIpynbNotesInputSchema), z.lazy(() => TagUncheckedCreateWithoutIpynbNotesInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutIpynbNotesInputSchema), z.lazy(() => TagCreateOrConnectWithoutIpynbNotesInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => TagUpsertWithWhereUniqueWithoutIpynbNotesInputSchema), z.lazy(() => TagUpsertWithWhereUniqueWithoutIpynbNotesInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => TagUpdateWithWhereUniqueWithoutIpynbNotesInputSchema), z.lazy(() => TagUpdateWithWhereUniqueWithoutIpynbNotesInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => TagUpdateManyWithWhereWithoutIpynbNotesInputSchema), z.lazy(() => TagUpdateManyWithWhereWithoutIpynbNotesInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => TagScalarWhereInputSchema), z.lazy(() => TagScalarWhereInputSchema).array()]).optional(),
}).strict();
export default TagUpdateManyWithoutIpynbNotesNestedInputSchema;
