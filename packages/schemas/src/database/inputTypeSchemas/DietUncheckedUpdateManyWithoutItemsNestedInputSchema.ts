import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietCreateWithoutItemsInputSchema } from './DietCreateWithoutItemsInputSchema';
import { DietUncheckedCreateWithoutItemsInputSchema } from './DietUncheckedCreateWithoutItemsInputSchema';
import { DietCreateOrConnectWithoutItemsInputSchema } from './DietCreateOrConnectWithoutItemsInputSchema';
import { DietUpsertWithWhereUniqueWithoutItemsInputSchema } from './DietUpsertWithWhereUniqueWithoutItemsInputSchema';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema';
import { DietUpdateWithWhereUniqueWithoutItemsInputSchema } from './DietUpdateWithWhereUniqueWithoutItemsInputSchema';
import { DietUpdateManyWithWhereWithoutItemsInputSchema } from './DietUpdateManyWithWhereWithoutItemsInputSchema';
import { DietScalarWhereInputSchema } from './DietScalarWhereInputSchema';

export const DietUncheckedUpdateManyWithoutItemsNestedInputSchema: z.ZodType<Prisma.DietUncheckedUpdateManyWithoutItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => DietCreateWithoutItemsInputSchema),z.lazy(() => DietCreateWithoutItemsInputSchema).array(),z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema),z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DietCreateOrConnectWithoutItemsInputSchema),z.lazy(() => DietCreateOrConnectWithoutItemsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DietUpsertWithWhereUniqueWithoutItemsInputSchema),z.lazy(() => DietUpsertWithWhereUniqueWithoutItemsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => DietWhereUniqueInputSchema),z.lazy(() => DietWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DietWhereUniqueInputSchema),z.lazy(() => DietWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DietWhereUniqueInputSchema),z.lazy(() => DietWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DietWhereUniqueInputSchema),z.lazy(() => DietWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DietUpdateWithWhereUniqueWithoutItemsInputSchema),z.lazy(() => DietUpdateWithWhereUniqueWithoutItemsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DietUpdateManyWithWhereWithoutItemsInputSchema),z.lazy(() => DietUpdateManyWithWhereWithoutItemsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DietScalarWhereInputSchema),z.lazy(() => DietScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DietUncheckedUpdateManyWithoutItemsNestedInputSchema;
