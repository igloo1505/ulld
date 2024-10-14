import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { RelatedValuesCreateWithoutEquationsInputSchema } from './RelatedValuesCreateWithoutEquationsInputSchema.js';
import { RelatedValuesUncheckedCreateWithoutEquationsInputSchema } from './RelatedValuesUncheckedCreateWithoutEquationsInputSchema.js';
import { RelatedValuesCreateOrConnectWithoutEquationsInputSchema } from './RelatedValuesCreateOrConnectWithoutEquationsInputSchema.js';
import { RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema } from './RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema.js';
import { RelatedValuesWhereUniqueInputSchema } from './RelatedValuesWhereUniqueInputSchema.js';
import { RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema } from './RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema.js';
import { RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema } from './RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema.js';
import { RelatedValuesScalarWhereInputSchema } from './RelatedValuesScalarWhereInputSchema.js';
export const RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema: z.ZodType<Prisma.RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema),z.lazy(() => RelatedValuesCreateWithoutEquationsInputSchema).array(),z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema),z.lazy(() => RelatedValuesUncheckedCreateWithoutEquationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RelatedValuesCreateOrConnectWithoutEquationsInputSchema),z.lazy(() => RelatedValuesCreateOrConnectWithoutEquationsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema),z.lazy(() => RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => RelatedValuesWhereUniqueInputSchema),z.lazy(() => RelatedValuesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RelatedValuesWhereUniqueInputSchema),z.lazy(() => RelatedValuesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RelatedValuesWhereUniqueInputSchema),z.lazy(() => RelatedValuesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RelatedValuesWhereUniqueInputSchema),z.lazy(() => RelatedValuesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema),z.lazy(() => RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema),z.lazy(() => RelatedValuesUpdateManyWithWhereWithoutEquationsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RelatedValuesScalarWhereInputSchema),z.lazy(() => RelatedValuesScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema;