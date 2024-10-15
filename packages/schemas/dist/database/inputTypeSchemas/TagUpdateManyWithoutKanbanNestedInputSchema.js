import { z } from 'zod';
import { TagCreateWithoutKanbanInputSchema } from './TagCreateWithoutKanbanInputSchema.js';
import { TagUncheckedCreateWithoutKanbanInputSchema } from './TagUncheckedCreateWithoutKanbanInputSchema.js';
import { TagCreateOrConnectWithoutKanbanInputSchema } from './TagCreateOrConnectWithoutKanbanInputSchema.js';
import { TagUpsertWithWhereUniqueWithoutKanbanInputSchema } from './TagUpsertWithWhereUniqueWithoutKanbanInputSchema.js';
import { TagCreateManyKanbanInputEnvelopeSchema } from './TagCreateManyKanbanInputEnvelopeSchema.js';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithWhereUniqueWithoutKanbanInputSchema } from './TagUpdateWithWhereUniqueWithoutKanbanInputSchema.js';
import { TagUpdateManyWithWhereWithoutKanbanInputSchema } from './TagUpdateManyWithWhereWithoutKanbanInputSchema.js';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema.js';
export const TagUpdateManyWithoutKanbanNestedInputSchema = z.object({
    create: z.union([z.lazy(() => TagCreateWithoutKanbanInputSchema), z.lazy(() => TagCreateWithoutKanbanInputSchema).array(), z.lazy(() => TagUncheckedCreateWithoutKanbanInputSchema), z.lazy(() => TagUncheckedCreateWithoutKanbanInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutKanbanInputSchema), z.lazy(() => TagCreateOrConnectWithoutKanbanInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => TagUpsertWithWhereUniqueWithoutKanbanInputSchema), z.lazy(() => TagUpsertWithWhereUniqueWithoutKanbanInputSchema).array()]).optional(),
    createMany: z.lazy(() => TagCreateManyKanbanInputEnvelopeSchema).optional(),
    set: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => TagUpdateWithWhereUniqueWithoutKanbanInputSchema), z.lazy(() => TagUpdateWithWhereUniqueWithoutKanbanInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => TagUpdateManyWithWhereWithoutKanbanInputSchema), z.lazy(() => TagUpdateManyWithWhereWithoutKanbanInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => TagScalarWhereInputSchema), z.lazy(() => TagScalarWhereInputSchema).array()]).optional(),
}).strict();
export default TagUpdateManyWithoutKanbanNestedInputSchema;
