import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RelatedValuesScalarWhereInputSchema } from './RelatedValuesScalarWhereInputSchema';
import { RelatedValuesUpdateManyMutationInputSchema } from './RelatedValuesUpdateManyMutationInputSchema';
import { RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema } from './RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema';

export const RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema: z.ZodType<Prisma.RelatedValuesUpdateManyWithWhereWithoutEquationsInput> = z.object({
  where: z.lazy(() => RelatedValuesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RelatedValuesUpdateManyMutationInputSchema),z.lazy(() => RelatedValuesUncheckedUpdateManyWithoutEquationsInputSchema) ]),
}).strict();

export default RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema;
