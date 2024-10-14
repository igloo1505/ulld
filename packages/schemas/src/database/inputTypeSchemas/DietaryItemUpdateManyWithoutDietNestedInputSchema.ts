import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietaryItemCreateWithoutDietInputSchema } from './DietaryItemCreateWithoutDietInputSchema';
import { DietaryItemUncheckedCreateWithoutDietInputSchema } from './DietaryItemUncheckedCreateWithoutDietInputSchema';
import { DietaryItemCreateOrConnectWithoutDietInputSchema } from './DietaryItemCreateOrConnectWithoutDietInputSchema';
import { DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema } from './DietaryItemUpsertWithWhereUniqueWithoutDietInputSchema';
import { DietaryItemWhereUniqueInputSchema } from './DietaryItemWhereUniqueInputSchema';
import { DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema } from './DietaryItemUpdateWithWhereUniqueWithoutDietInputSchema';
import { DietaryItemUpdateManyWithWhereWithoutDietInputSchema } from './DietaryItemUpdateManyWithWhereWithoutDietInputSchema';
import { DietaryItemScalarWhereInputSchema } from './DietaryItemScalarWhereInputSchema';

export const DietaryItemUpdateManyWithoutDietNestedInputSchema: z.ZodType<Prisma.DietaryItemUpdateManyWithoutDietNestedInput> = z.object({
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

export default DietaryItemUpdateManyWithoutDietNestedInputSchema;
