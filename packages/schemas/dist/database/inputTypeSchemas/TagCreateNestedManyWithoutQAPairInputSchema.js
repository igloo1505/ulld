import { z } from 'zod';
import { TagCreateWithoutQAPairInputSchema } from './TagCreateWithoutQAPairInputSchema.js';
import { TagUncheckedCreateWithoutQAPairInputSchema } from './TagUncheckedCreateWithoutQAPairInputSchema.js';
import { TagCreateOrConnectWithoutQAPairInputSchema } from './TagCreateOrConnectWithoutQAPairInputSchema.js';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
export const TagCreateNestedManyWithoutQAPairInputSchema = z.object({
    create: z.union([z.lazy(() => TagCreateWithoutQAPairInputSchema), z.lazy(() => TagCreateWithoutQAPairInputSchema).array(), z.lazy(() => TagUncheckedCreateWithoutQAPairInputSchema), z.lazy(() => TagUncheckedCreateWithoutQAPairInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutQAPairInputSchema), z.lazy(() => TagCreateOrConnectWithoutQAPairInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default TagCreateNestedManyWithoutQAPairInputSchema;
