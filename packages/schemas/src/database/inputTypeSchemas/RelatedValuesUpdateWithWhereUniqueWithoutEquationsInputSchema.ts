import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { RelatedValuesWhereUniqueInputSchema } from './RelatedValuesWhereUniqueInputSchema.js';
import { RelatedValuesUpdateWithoutEquationsInputSchema } from './RelatedValuesUpdateWithoutEquationsInputSchema.js';
import { RelatedValuesUncheckedUpdateWithoutEquationsInputSchema } from './RelatedValuesUncheckedUpdateWithoutEquationsInputSchema.js';
export const RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.RelatedValuesUpdateWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => RelatedValuesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RelatedValuesUpdateWithoutEquationsInputSchema),z.lazy(() => RelatedValuesUncheckedUpdateWithoutEquationsInputSchema) ]),
}).strict();
export default RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema;