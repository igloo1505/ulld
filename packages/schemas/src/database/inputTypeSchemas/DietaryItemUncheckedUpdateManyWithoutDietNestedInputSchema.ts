import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietaryItemCreateWithoutDietInputSchema } from './DietaryItemCreateWithoutDietInputSchema.js';
import { DietaryItemUncheckedCreateWithoutDietInputSchema } from './DietaryItemUncheckedCreateWithoutDietInputSchema.js';
import { DietaryItemCreateOrConnectWithoutDietInputSchema } from './DietaryItemCreateOrConnectWithoutDietInputSchema.js';
import { DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema } from './DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema.js';
import { DietaryItemWhereUniqueInputSchema } from './DietaryItemWhereUniqueInputSchema.js';
import { DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema } from './DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema.js';
import { DietaryItemUpdateManyWithWhereWithoutDietInputSchema } from './DietaryItemUpdateManyWithWhereWithoutDietInputSchema.js';
import { DietaryItemScalarWhereInputSchema } from './DietaryItemScalarWhereInputSchema.js';
export const DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema: z.ZodType<Prisma.DietaryItemUncheckedUpdateManyWithoutDietNestedInput> = z.object({
  create: z.union([ z.lazy(() => DietaryItemCreateWithoutDietInputSchema),z.lazy(() => DietaryItemCreateWithoutDietInputSchema).array(),z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema),z.lazy(() => DietaryItemUncheckedCreateWithoutDietInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DietaryItemCreateOrConnectWithoutDietInputSchema),z.lazy(() => DietaryItemCreateOrConnectWithoutDietInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema),z.lazy(() => DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => DietaryItemWhereUniqueInputSchema),z.lazy(() => DietaryItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DietaryItemWhereUniqueInputSchema),z.lazy(() => DietaryItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DietaryItemWhereUniqueInputSchema),z.lazy(() => DietaryItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DietaryItemWhereUniqueInputSchema),z.lazy(() => DietaryItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema),z.lazy(() => DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DietaryItemUpdateManyWithWhereWithoutDietInputSchema),z.lazy(() => DietaryItemUpdateManyWithWhereWithoutDietInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DietaryItemScalarWhereInputSchema),z.lazy(() => DietaryItemScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default DietaryItemUncheckedUpdateManyWithoutDietNestedInputSchema;