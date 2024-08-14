import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RelatedValuesCreateWithoutEquationsInputSchema } from './RelatedValuesCreateWithoutEquationsInputSchema';
import { RelatedValuesUncheckedCreateWithoutEquationsInputSchema } from './RelatedValuesUncheckedCreateWithoutEquationsInputSchema';
import { RelatedValuesCreateOrConnectWithoutEquationsInputSchema } from './RelatedValuesCreateOrConnectWithoutEquationsInputSchema';
import { RelatedValuesWhereUniqueInputSchema } from './RelatedValuesWhereUniqueInputSchema';

export const RelatedValuesCreateNestedManyWithoutEquationsInputSchema: z.ZodType<Prisma.RelatedValuesCreateNestedManyWithoutEquationsInput> = z.object({
  create: z.union([ z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema),z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema).array(),z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema),z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RelatedValuesCreateOrConnectWithoutEquationsInputSchema),z.lazy(() => RelatedValuesCreateOrConnectWithoutEquationsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RelatedValuesWhereUniqueInputSchema),z.lazy(() => RelatedValuesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RelatedValuesCreateNestedManyWithoutEquationsInputSchema;
