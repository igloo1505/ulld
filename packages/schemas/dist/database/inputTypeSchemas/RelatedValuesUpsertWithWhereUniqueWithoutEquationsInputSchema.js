import { z } from 'zod';
import { RelatedValuesWhereUniqueInputSchema } from './RelatedValuesWhereUniqueInputSchema.js';
import { RelatedValuesUpdateWithoutEquationsInputSchema } from './RelatedValuesUpdateWithoutEquationsInputSchema.js';
import { RelatedValuesUncheckedUpdateWithoutEquationsInputSchema } from './RelatedValuesUncheckedUpdateWithoutEquationsInputSchema.js';
import { RelatedValuesCreateWithoutEquationsInputSchema } from './RelatedValuesCreateWithoutEquationsInputSchema.js';
import { RelatedValuesUncheckedCreateWithoutEquationsInputSchema } from './RelatedValuesUncheckedCreateWithoutEquationsInputSchema.js';
export const RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema = z.object({
    where: z.lazy(() => RelatedValuesWhereUniqueInputSchema),
    update: z.union([z.lazy(() => RelatedValuesUpdateWithoutEquationsInputSchema), z.lazy(() => RelatedValuesUncheckedUpdateWithoutEquationsInputSchema)]),
    create: z.union([z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema), z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema)]),
}).strict();
export default RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema;
