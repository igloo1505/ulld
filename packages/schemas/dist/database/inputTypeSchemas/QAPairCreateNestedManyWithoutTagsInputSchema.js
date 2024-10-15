import { z } from 'zod';
import { QAPairCreateWithoutTagsInputSchema } from './QAPairCreateWithoutTagsInputSchema.js';
import { QAPairUncheckedCreateWithoutTagsInputSchema } from './QAPairUncheckedCreateWithoutTagsInputSchema.js';
import { QAPairCreateOrConnectWithoutTagsInputSchema } from './QAPairCreateOrConnectWithoutTagsInputSchema.js';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
export const QAPairCreateNestedManyWithoutTagsInputSchema = z.object({
    create: z.union([z.lazy(() => QAPairCreateWithoutTagsInputSchema), z.lazy(() => QAPairCreateWithoutTagsInputSchema).array(), z.lazy(() => QAPairUncheckedCreateWithoutTagsInputSchema), z.lazy(() => QAPairUncheckedCreateWithoutTagsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => QAPairCreateOrConnectWithoutTagsInputSchema), z.lazy(() => QAPairCreateOrConnectWithoutTagsInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => QAPairWhereUniqueInputSchema), z.lazy(() => QAPairWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default QAPairCreateNestedManyWithoutTagsInputSchema;
