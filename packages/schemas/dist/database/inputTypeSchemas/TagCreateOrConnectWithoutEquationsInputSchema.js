import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagCreateWithoutEquationsInputSchema } from './TagCreateWithoutEquationsInputSchema.js';
import { TagUncheckedCreateWithoutEquationsInputSchema } from './TagUncheckedCreateWithoutEquationsInputSchema.js';
export const TagCreateOrConnectWithoutEquationsInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    create: z.union([z.lazy(() => TagCreateWithoutEquationsInputSchema), z.lazy(() => TagUncheckedCreateWithoutEquationsInputSchema)]),
}).strict();
export default TagCreateOrConnectWithoutEquationsInputSchema;
