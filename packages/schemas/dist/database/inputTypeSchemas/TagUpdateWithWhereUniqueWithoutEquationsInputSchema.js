import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutEquationsInputSchema } from './TagUpdateWithoutEquationsInputSchema.js';
import { TagUncheckedUpdateWithoutEquationsInputSchema } from './TagUncheckedUpdateWithoutEquationsInputSchema.js';
export const TagUpdateWithWhereUniqueWithoutEquationsInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    data: z.union([z.lazy(() => TagUpdateWithoutEquationsInputSchema), z.lazy(() => TagUncheckedUpdateWithoutEquationsInputSchema)]),
}).strict();
export default TagUpdateWithWhereUniqueWithoutEquationsInputSchema;
