import { z } from 'zod';
import { TagCreateWithoutToDoInputSchema } from './TagCreateWithoutToDoInputSchema.js';
import { TagUncheckedCreateWithoutToDoInputSchema } from './TagUncheckedCreateWithoutToDoInputSchema.js';
import { TagCreateOrConnectWithoutToDoInputSchema } from './TagCreateOrConnectWithoutToDoInputSchema.js';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
export const TagCreateNestedManyWithoutToDoInputSchema = z.object({
    create: z.union([z.lazy(() => TagCreateWithoutToDoInputSchema), z.lazy(() => TagCreateWithoutToDoInputSchema).array(), z.lazy(() => TagUncheckedCreateWithoutToDoInputSchema), z.lazy(() => TagUncheckedCreateWithoutToDoInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutToDoInputSchema), z.lazy(() => TagCreateOrConnectWithoutToDoInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default TagCreateNestedManyWithoutToDoInputSchema;
