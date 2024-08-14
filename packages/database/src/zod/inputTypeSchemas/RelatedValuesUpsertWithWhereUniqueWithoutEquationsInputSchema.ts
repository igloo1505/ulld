import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RelatedValuesWhereUniqueInputSchema } from './RelatedValuesWhereUniqueInputSchema';
import { RelatedValuesUpdateWithoutEquationsInputSchema } from './RelatedValuesUpdateWithoutEquationsInputSchema';
import { RelatedValuesUncheckedUpdateWithoutEquationsInputSchema } from './RelatedValuesUncheckedUpdateWithoutEquationsInputSchema';
import { RelatedValuesCreateWithoutEquationsInputSchema } from './RelatedValuesCreateWithoutEquationsInputSchema';
import { RelatedValuesUncheckedCreateWithoutEquationsInputSchema } from './RelatedValuesUncheckedCreateWithoutEquationsInputSchema';

export const RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.RelatedValuesUpsertWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => RelatedValuesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RelatedValuesUpdateWithoutEquationsInputSchema),z.lazy(() => RelatedValuesUncheckedUpdateWithoutEquationsInputSchema) ]),
  create: z.union([ z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema),z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();

export default RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema;
