import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagCreateWithoutQAPairInputSchema } from './TagCreateWithoutQAPairInputSchema.js';
import { TagUncheckedCreateWithoutQAPairInputSchema } from './TagUncheckedCreateWithoutQAPairInputSchema.js';
export const TagCreateOrConnectWithoutQAPairInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    create: z.union([z.lazy(() => TagCreateWithoutQAPairInputSchema), z.lazy(() => TagUncheckedCreateWithoutQAPairInputSchema)]),
}).strict();
export default TagCreateOrConnectWithoutQAPairInputSchema;
