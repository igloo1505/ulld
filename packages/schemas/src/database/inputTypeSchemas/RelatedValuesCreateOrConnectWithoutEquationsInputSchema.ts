import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RelatedValuesWhereUniqueInputSchema } from './RelatedValuesWhereUniqueInputSchema';
import { RelatedValuesCreateWithoutEquationsInputSchema } from './RelatedValuesCreateWithoutEquationsInputSchema';
import { RelatedValuesUncheckedCreateWithoutEquationsInputSchema } from './RelatedValuesUncheckedCreateWithoutEquationsInputSchema';

export const RelatedValuesCreateOrConnectWithoutEquationsInputSchema: z.ZodType<Prisma.RelatedValuesCreateOrConnectWithoutEquationsInput> = z.object({
  where: z.lazy(() => RelatedValuesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema),z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();

export default RelatedValuesCreateOrConnectWithoutEquationsInputSchema;
