import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { RelatedValuesScalarWhereInputSchema } from './RelatedValuesScalarWhereInputSchema.js';
import { RelatedValuesUpdateManyMutationInputSchema } from './RelatedValuesUpdateManyMutationInputSchema.js';
import { RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema } from './RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema.js';
export const RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema: z.ZodType<Prisma.RelatedValuesUpdateManyWithWhereWithoutEquationsInput> = z.object({
  where: z.lazy(() => RelatedValuesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RelatedValuesUpdateManyMutationInputSchema),z.lazy(() => RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema) ]),
}).strict();
export default RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema;