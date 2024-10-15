import { z } from 'zod';
import { RelatedValuesScalarWhereInputSchema } from './RelatedValuesScalarWhereInputSchema.js';
import { RelatedValuesUpdateManyMutationInputSchema } from './RelatedValuesUpdateManyMutationInputSchema.js';
import { RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema } from './RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema.js';
export const RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema = z.object({
    where: z.lazy(() => RelatedValuesScalarWhereInputSchema),
    data: z.union([z.lazy(() => RelatedValuesUpdateManyMutationInputSchema), z.lazy(() => RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema)]),
}).strict();
export default RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema;
