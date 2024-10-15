import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutToDoInputSchema } from './TagUpdateWithoutToDoInputSchema.js';
import { TagUncheckedUpdateWithoutToDoInputSchema } from './TagUncheckedUpdateWithoutToDoInputSchema.js';
import { TagCreateWithoutToDoInputSchema } from './TagCreateWithoutToDoInputSchema.js';
import { TagUncheckedCreateWithoutToDoInputSchema } from './TagUncheckedCreateWithoutToDoInputSchema.js';
export const TagUpsertWithWhereUniqueWithoutToDoInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    update: z.union([z.lazy(() => TagUpdateWithoutToDoInputSchema), z.lazy(() => TagUncheckedUpdateWithoutToDoInputSchema)]),
    create: z.union([z.lazy(() => TagCreateWithoutToDoInputSchema), z.lazy(() => TagUncheckedCreateWithoutToDoInputSchema)]),
}).strict();
export default TagUpsertWithWhereUniqueWithoutToDoInputSchema;
