import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietCreateWithoutItemsInputSchema } from './DietCreateWithoutItemsInputSchema.js';
import { DietUncheckedCreateWithoutItemsInputSchema } from './DietUncheckedCreateWithoutItemsInputSchema.js';
import { DietCreateOrConnectWithoutItemsInputSchema } from './DietCreateOrConnectWithoutItemsInputSchema.js';
import { DietUpsertWithWhereUniqueWithoutItemsInputSchema } from './DietUpsertWithWhereUniqueWithoutItemsInputSchema.js';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema.js';
import { DietUpdateWithWhereUniqueWithoutItemsInputSchema } from './DietUpdateWithWhereUniqueWithoutItemsInputSchema.js';
import { DietUpdateManyWithWhereWithoutItemsInputSchema } from './DietUpdateManyWithWhereWithoutItemsInputSchema.js';
import { DietScalarWhereInputSchema } from './DietScalarWhereInputSchema.js';
export const DietUpdateManyWithoutItemsNestedInputSchema: z.ZodType<Prisma.DietUpdateManyWithoutItemsNestedInput> = z.object({
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
export default DietUpdateManyWithoutItemsNestedInputSchema;