import { z } from 'zod';
import { TagCreateWithoutKanbanInputSchema } from './TagCreateWithoutKanbanInputSchema.js';
import { TagUncheckedCreateWithoutKanbanInputSchema } from './TagUncheckedCreateWithoutKanbanInputSchema.js';
import { TagCreateOrConnectWithoutKanbanInputSchema } from './TagCreateOrConnectWithoutKanbanInputSchema.js';
import { TagCreateManyKanbanInputEnvelopeSchema } from './TagCreateManyKanbanInputEnvelopeSchema.js';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
export const TagUncheckedCreateNestedManyWithoutKanbanInputSchema = z.object({
    create: z.union([z.lazy(() => TagCreateWithoutKanbanInputSchema), z.lazy(() => TagCreateWithoutKanbanInputSchema).array(), z.lazy(() => TagUncheckedCreateWithoutKanbanInputSchema), z.lazy(() => TagUncheckedCreateWithoutKanbanInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutKanbanInputSchema), z.lazy(() => TagCreateOrConnectWithoutKanbanInputSchema).array()]).optional(),
    createMany: z.lazy(() => TagCreateManyKanbanInputEnvelopeSchema).optional(),
    connect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default TagUncheckedCreateNestedManyWithoutKanbanInputSchema;
