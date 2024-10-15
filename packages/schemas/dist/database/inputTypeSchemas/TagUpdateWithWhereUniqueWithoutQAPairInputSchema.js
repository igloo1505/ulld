import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutQAPairInputSchema } from './TagUpdateWithoutQAPairInputSchema.js';
import { TagUncheckedUpdateWithoutQAPairInputSchema } from './TagUncheckedUpdateWithoutQAPairInputSchema.js';
export const TagUpdateWithWhereUniqueWithoutQAPairInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    data: z.union([z.lazy(() => TagUpdateWithoutQAPairInputSchema), z.lazy(() => TagUncheckedUpdateWithoutQAPairInputSchema)]),
}).strict();
export default TagUpdateWithWhereUniqueWithoutQAPairInputSchema;
