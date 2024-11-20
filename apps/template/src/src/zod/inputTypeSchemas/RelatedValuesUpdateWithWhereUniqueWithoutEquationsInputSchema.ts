import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RelatedValuesWhereUniqueInputSchema } from './RelatedValuesWhereUniqueInputSchema';
import { RelatedValuesUpdateWithoutEquationsInputSchema } from './RelatedValuesUpdateWithoutEquationsInputSchema';
import { RelatedValuesUncheckedUpdateWithoutEquationsInputSchema } from './RelatedValuesUncheckedUpdateWithoutEquationsInputSchema';

export const RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.RelatedValuesUpdateWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => RelatedValuesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RelatedValuesUpdateWithoutEquationsInputSchema),z.lazy(() => RelatedValuesUncheckedUpdateWithoutEquationsInputSchema) ]),
}).strict();

export default RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema;
